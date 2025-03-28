import "./HomeText.css";
import TextingImg from "../assets/texting2.webp";

function HomeText() {
  return (
    <>
      <div className="community">
        <div className="text">
          <h1>Get support from our community</h1>
          <p>
            Whatever it is you are going through, you are not alone. We have a
            community that offer friendship and support in many issues such as
            relationships, LGBTQ, finances, parental issues and so much more in
            chats and forums.
          </p>
        </div>
        <button className="events">Join Our Community</button>
      </div>
      <div className="AI-therapist">
        <img src={TextingImg} alt="texting" />
        <div className="text">
          <div className="tittle">
            <h1>Compassionate AI Therapist</h1>
            <p>
              Looking For a therapy that is private and non-judgemental? Our AI
              Therapist is trained to listen, help your figure things out and
              never judge. She can help you come up with solutions for your
              triggers and much more. <br />
              Chat with her now!
            </p>
          </div>
          <div className="chat">
            <h4> Hi Mark,How are you feeling today? Tell me how i can help.</h4>
            <p>
              I am anxious and very nervours. I can bearly keep it together.
            </p>
            <h4>
              Am sorry to hear you are going through that. Can you tell me what
              made you feel that way?
            </h4>
            <p>
              I'm at an interview. This is my dream
              job and I don't want to mess up this opportunity.
            </p>
            <h4>
              Interviews can be overwhelming. First, Congratulation! This is
              great. Practice some breathing exercise and tell me how you feel.
              Also, keep the negative thoughts away.
            </h4>
            <p>
              I am feeling alot better. I feel ready to ace this interview.
              Thanks for the Help.
            </p>
            <h4>
              You are welcome. Am glad i could help. All the best in your
              interview.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeText;
