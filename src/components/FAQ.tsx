import Accordion from "./Accordian";
import "../index.css";
export default function FAQ() {
  const faqs = [
    {
      index: 1,
      title: "What is Netflix?",
      description: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    {
      index: 2,
      title: "How much does Netflix cost?",
      description: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $5.99 to $20.99 a month (pre-tax). No extra costs, no contracts.`,
    },
    {
      index: 3,
      title: "Where can I watch?",
      description: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      index: 4,
      title: "How do I cancel?",
      description: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      index: 5,
      title: "What can I watch on Netflix?",
      description: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      index: 6,
      title: "Is Netflix good for kids?",
      description: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((item) => (
        <div key={item.index}>
          <Accordion title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
}
