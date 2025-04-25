# chatbot/views.py

import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ChatMessage
from .serializers import ChatMessageSerializer

HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1"
HUGGINGFACE_API_TOKEN = "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"

class ChatBotView(APIView):
    def post(self, request):
        message = request.data.get("message", "")
        if not message:
            return Response({"error": "No message provided"}, status=status.HTTP_400_BAD_REQUEST)

        # Save user message
        ChatMessage.objects.create(sender='user', text=message)

        headers = {
            "Authorization": f"Bearer {HUGGINGFACE_API_TOKEN}",
            "Content-Type": "application/json"
        }

        # Refined prompt
        prompt = (
            "You are a compassionate therapist. Respond to the user's message with warmth and care. "
            "Avoid restating the user's message. Keep your answer short and clear.\n\n"
            f"Message: {message}\n\n"
            "Response:"
        )

        payload = {
            "inputs": prompt,
            "parameters": {
                "max_new_tokens": 60,
                "temperature": 0.7,
                "top_p": 0.9,
                "repetition_penalty": 1.1
            }
        }

        try:
            response = requests.post(HUGGINGFACE_API_URL, headers=headers, json=payload)
            response.raise_for_status()
            data = response.json()

            reply = ""
            if isinstance(data, list) and len(data) > 0 and "generated_text" in data[0]:
                full_text = data[0]["generated_text"]
                reply = full_text.split("Response:")[-1].strip()
            elif isinstance(data, dict) and "generated_text" in data:
                reply = data["generated_text"]
            else:
                reply = "Sorry, I couldn't understand that."

            # Save bot reply
            ChatMessage.objects.create(sender='bot', text=reply)

            return Response({"reply": reply})

        except requests.exceptions.RequestException as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ChatHistoryView(APIView):
    def get(self, request):
        messages = ChatMessage.objects.all().order_by('timestamp')
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data)
