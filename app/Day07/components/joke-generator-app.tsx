"use client";
import Link from "next/link";
import { useState } from "react"; //import State from react

export default function JokeGenerator() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" }); //set the State

  //Urdu Jokes
  const jokesInUrdu = [
    {
      setup: "استاد: دو اور دو کتنے ہوتے ہیں؟",
      punchline: "شاگرد: سر، چھوٹے دو اور بڑے دو ملا کر چار ہوتے ہیں!",
    },
    {
      setup: "بیوی: چائے میں مکھی گر گئی!",
      punchline: "شوہر: کوئی بات نہیں، تمہاری قسمت میں تھی، پی لو!",
    },
    {
      setup: "پہلا دوست: تمہاری بیوی کیسے ہیں؟",
      punchline: "دوسرا دوست: زندہ ہیں، بس یہی کافی ہے!",
    },
    {
      setup: "میاں بیوی میں لڑائی ہو رہی تھی۔",
      punchline: "شوہر: میری ماں صحیح کہتی تھی، تم سے شادی نہ کرو!",
    },
    {
      setup: "پہلا دوست: تم کتنی نیند لیتے ہو؟",
      punchline: "دوسرا دوست: جب تک میری بیوی جاگ نہ جائے!",
    },
    {
      setup: "شوہر: میری شرٹ کہاں ہے؟",
      punchline: "بیوی: لانڈری میں ہے، صبر کریں، خدا کی رضا ہے!",
    },
    {
      setup: "استاد: امتحان میں کون سا سوال مشکل لگا؟",
      punchline: "شاگرد: سوال ہی مشکل لگا، جو باقی چھوڑ دیا!",
    },
    {
      setup: "ایک آدمی کا موڈ خراب تھا۔",
      punchline:
        "دوسرے نے پوچھا، بیوی سے جھگڑا ہوا؟ جواب: نہیں، آرام سے سو رہی ہے!",
    },
    {
      setup: "پہلا دوست: بیوی سے جھگڑا کیسے ختم کیا؟",
      punchline: "دوسرا دوست: اس کے پسندیدہ کھانے کا وعدہ کر کے!",
    },
    {
      setup: "بیوی: میں موٹی لگ رہی ہوں؟",
      punchline: "شوہر: نہیں، تمہاری سوچ موٹی ہو رہی ہے!",
    },
    {
      setup: "استاد: بتاؤ، شیر اور بکری میں کیا فرق ہے؟",
      punchline: "شاگرد: سر، شیر کا رونا بکری کی طرح نہیں ہوتا!",
    },
    {
      setup: "دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: دن میں شیر، رات میں بکری!",
    },
    {
      setup: "لڑکا: آپ کی شادی کب ہوئی؟",
      punchline: "لڑکی: جب دل ٹوٹا اور قسمت جاگی!",
    },
    {
      setup: "استاد: کس پرندے کی آواز سب سے اچھی ہے؟",
      punchline: "شاگرد: مرغا، جو صبح جگاتا ہے!",
    },
    {
      setup: "شوہر: آج کھانا کس نے بنایا؟",
      punchline: "بیوی: میری دوست نے، ذائقہ کیسے ہے؟",
    },
    {
      setup: "استاد: نالائق کون ہوتا ہے؟",
      punchline: "شاگرد: جو روزانہ دیر سے اسکول آتا ہے!",
    },
    {
      setup: "بیوی: میں تمہیں کیسے لگتی ہوں؟",
      punchline: "شوہر: میرا دماغ خراب لگتا ہے!",
    },
    {
      setup: "پہلا دوست: تم نے کبھی غلطی کی؟",
      punchline: "دوسرا دوست: بیوی سے شادی، بس یہی غلطی ہے!",
    },
    {
      setup: "استاد: ہوائی جہاز کس نے بنایا؟",
      punchline: "شاگرد: سر، پتہ نہیں، میں سوتا رہ گیا تھا!",
    },
    {
      setup: "بیوی: آج تمہیں میری یاد کیوں نہیں آئی؟",
      punchline: "شوہر: بلی نے راستہ کاٹ دیا، غلطی ہو گئی!",
    },
    {
      setup: "شوہر: آج بہت کام تھا؟",
      punchline: "بیوی: بس تمہارے سوال ہی باقی تھے!",
    },
    {
      setup: "استاد: کون سی چیز ہمیشہ ادھر اُدھر گھومتی رہتی ہے؟",
      punchline: "شاگرد: سر، ہماری قسمت!",
    },
    {
      setup: "دوست: تمہاری شادی کب ہو رہی ہے؟",
      punchline: "دوسرا دوست: جب قسمت جاگ جائے گی!",
    },
    {
      setup: "استاد: کون سا پرندہ سب سے زیادہ بھاری ہے؟",
      punchline: "شاگرد: سر، بھینس، جو اڑ نہیں سکتی!",
    },
    {
      setup: "بیوی: آج کھانا کیسا ہے؟",
      punchline: "شوہر: زہر، مگر محبت میں کھا رہا ہوں!",
    },
    {
      setup: "پہلا دوست: شادی کیوں نہیں کرتے؟",
      punchline: "دوسرا دوست: غلطی سے سبق سیکھ لیا ہے!",
    },
    {
      setup: "استاد: تم نے ہوم ورک کیوں نہیں کیا؟",
      punchline: "شاگرد: سر، کل بجلی چلی گئی تھی!",
    },
    {
      setup: "بیوی: مجھے تحفہ کیوں نہیں دیا؟",
      punchline: "شوہر: صبر کرو، اللہ صبر کرنے والوں کے ساتھ ہے!",
    },
    {
      setup: "لڑکی: کیا تم مجھے یاد کرتے ہو؟",
      punchline: "لڑکا: نہیں، صرف خواب میں ہی آتی ہو!",
    },
    {
      setup: "استاد: سب سے مشکل کام کیا ہے؟",
      punchline: "شاگرد: سر، صبح جلدی اٹھنا!",
    },
    {
      setup: "بیوی: آج کھانا کیوں نہیں بنایا؟",
      punchline: "شوہر: آج چھٹی ہے، خود بنا لو!",
    },
    {
      setup: "شوہر: میں نے آج بہت محنت کی ہے!",
      punchline: "بیوی: پھر آرام کرو، خواب میں ہی اچھا کام کرو!",
    },
    {
      setup: "استاد: سب سے پیارا دن کون سا ہے؟",
      punchline: "شاگرد: سر، اتوار، کیونکہ اسکول نہیں ہوتا!",
    },
    {
      setup: "بیوی: تم نے میرے لیے کیا خریدا؟",
      punchline: "شوہر: صبر، اور یہ تمہارے لیے بہت ہے!",
    },
    {
      setup: "دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، اور کیا چاہیے؟",
    },
    {
      setup: "استاد: تمہیں کس چیز سے ڈر لگتا ہے؟",
      punchline: "شاگرد: سر، بیوی کے غصے سے!",
    },
    {
      setup: "شوہر: تم میری زندگی ہو!",
      punchline: "بیوی: اچھا! تو پھر میری زندگی کیوں خراب کی؟",
    },
    {
      setup: "استاد: سب سے اچھا کھانا کون سا ہے؟",
      punchline: "شاگرد: سر، وہ جو مفت ملے!",
    },
    {
      setup: "بیوی: مجھے جنت کی یاد کیوں نہیں آتی؟",
      punchline: "شوہر: کیونکہ تم روز مجھے جہنم بنا دیتی ہو!",
    },
    {
      setup: "پہلا دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، بس یہی کافی ہے!",
    },
    {
      setup: "استاد: تم نے ہوم ورک کیوں نہیں کیا؟",
      punchline: "شاگرد: سر، بجلی چلی گئی تھی!",
    },
    {
      setup: "بیوی: مجھے تحفہ کیوں نہیں دیا؟",
      punchline: "شوہر: صبر کرو، اللہ صبر کرنے والوں کے ساتھ ہے!",
    },
    {
      setup: "لڑکی: کیا تم مجھے یاد کرتے ہو؟",
      punchline: "لڑکا: نہیں، صرف خواب میں ہی آتی ہو!",
    },
    {
      setup: "استاد: سب سے مشکل کام کیا ہے؟",
      punchline: "شاگرد: سر، صبح جلدی اٹھنا!",
    },
    {
      setup: "بیوی: آج کھانا کیوں نہیں بنایا؟",
      punchline: "شوہر: آج چھٹی ہے، خود بنا لو!",
    },
    {
      setup: "شوہر: میں نے آج بہت محنت کی ہے!",
      punchline: "بیوی: پھر آرام کرو، خواب میں ہی اچھا کام کرو!",
    },
    {
      setup: "استاد: سب سے پیارا دن کون سا ہے؟",
      punchline: "شاگرد: سر، اتوار، کیونکہ اسکول نہیں ہوتا!",
    },
    {
      setup: "بیوی: تم نے میرے لیے کیا خریدا؟",
      punchline: "شوہر: صبر، اور یہ تمہارے لیے بہت ہے!",
    },
    {
      setup: "دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، اور کیا چاہیے؟",
    },
    {
      setup: "استاد: تمہیں کس چیز سے ڈر لگتا ہے؟",
      punchline: "شاگرد: سر، بیوی کے غصے سے!",
    },
    {
      setup: "شوہر: تم میری زندگی ہو!",
      punchline: "بیوی: اچھا! تو پھر میری زندگی کیوں خراب کی؟",
    },
    {
      setup: "استاد: سب سے اچھا کھانا کون سا ہے؟",
      punchline: "شاگرد: سر، وہ جو مفت ملے!",
    },
    {
      setup: "بیوی: مجھے جنت کی یاد کیوں نہیں آتی؟",
      punchline: "شوہر: کیونکہ تم روز مجھے جہنم بنا دیتی ہو!",
    },
    {
      setup: "پہلا دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، بس یہی کافی ہے!",
    },
    {
      setup: "استاد: تم نے ہوم ورک کیوں نہیں کیا؟",
      punchline: "شاگرد: سر، بجلی چلی گئی تھی!",
    },
    {
      setup: "بیوی: مجھے تحفہ کیوں نہیں دیا؟",
      punchline: "شوہر: صبر کرو، اللہ صبر کرنے والوں کے ساتھ ہے!",
    },
    {
      setup: "لڑکی: کیا تم مجھے یاد کرتے ہو؟",
      punchline: "لڑکا: نہیں، صرف خواب میں ہی آتی ہو!",
    },
    {
      setup: "استاد: سب سے مشکل کام کیا ہے؟",
      punchline: "شاگرد: سر، صبح جلدی اٹھنا!",
    },
    {
      setup: "بیوی: آج کھانا کیوں نہیں بنایا؟",
      punchline: "شوہر: آج چھٹی ہے، خود بنا لو!",
    },
    {
      setup: "شوہر: میں نے آج بہت محنت کی ہے!",
      punchline: "بیوی: پھر آرام کرو، خواب میں ہی اچھا کام کرو!",
    },
    {
      setup: "استاد: سب سے پیارا دن کون سا ہے؟",
      punchline: "شاگرد: سر، اتوار، کیونکہ اسکول نہیں ہوتا!",
    },
    {
      setup: "بیوی: تم نے میرے لیے کیا خریدا؟",
      punchline: "شوہر: صبر، اور یہ تمہارے لیے بہت ہے!",
    },
    {
      setup: "دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، اور کیا چاہیے؟",
    },
    {
      setup: "استاد: تمہیں کس چیز سے ڈر لگتا ہے؟",
      punchline: "شاگرد: سر، بیوی کے غصے سے!",
    },
    {
      setup: "شوہر: تم میری زندگی ہو!",
      punchline: "بیوی: اچھا! تو پھر میری زندگی کیوں خراب کی؟",
    },
    {
      setup: "استاد: سب سے اچھا کھانا کون سا ہے؟",
      punchline: "شاگرد: سر، وہ جو مفت ملے!",
    },
    {
      setup: "بیوی: مجھے جنت کی یاد کیوں نہیں آتی؟",
      punchline: "شوہر: کیونکہ تم روز مجھے جہنم بنا دیتی ہو!",
    },
    {
      setup: "پہلا دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، بس یہی کافی ہے!",
    },
    {
      setup: "استاد: تم نے ہوم ورک کیوں نہیں کیا؟",
      punchline: "شاگرد: سر، بجلی چلی گئی تھی!",
    },
    {
      setup: "بیوی: مجھے تحفہ کیوں نہیں دیا؟",
      punchline: "شوہر: صبر کرو، اللہ صبر کرنے والوں کے ساتھ ہے!",
    },
    {
      setup: "لڑکی: کیا تم مجھے یاد کرتے ہو؟",
      punchline: "لڑکا: نہیں، صرف خواب میں ہی آتی ہو!",
    },
    {
      setup: "استاد: سب سے مشکل کام کیا ہے؟",
      punchline: "شاگرد: سر، صبح جلدی اٹھنا!",
    },
    {
      setup: "بیوی: آج کھانا کیوں نہیں بنایا؟",
      punchline: "شوہر: آج چھٹی ہے، خود بنا لو!",
    },
    {
      setup: "شوہر: میں نے آج بہت محنت کی ہے!",
      punchline: "بیوی: پھر آرام کرو، خواب میں ہی اچھا کام کرو!",
    },
    {
      setup: "استاد: سب سے پیارا دن کون سا ہے؟",
      punchline: "شاگرد: سر، اتوار، کیونکہ اسکول نہیں ہوتا!",
    },
    {
      setup: "بیوی: تم نے میرے لیے کیا خریدا؟",
      punchline: "شوہر: صبر، اور یہ تمہارے لیے بہت ہے!",
    },
    {
      setup: "دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، اور کیا چاہیے؟",
    },
    {
      setup: "استاد: تمہیں کس چیز سے ڈر لگتا ہے؟",
      punchline: "شاگرد: سر، بیوی کے غصے سے!",
    },
    {
      setup: "شوہر: تم میری زندگی ہو!",
      punchline: "بیوی: اچھا! تو پھر میری زندگی کیوں خراب کی؟",
    },
    {
      setup: "استاد: سب سے اچھا کھانا کون سا ہے؟",
      punchline: "شاگرد: سر، وہ جو مفت ملے!",
    },
    {
      setup: "بیوی: مجھے جنت کی یاد کیوں نہیں آتی؟",
      punchline: "شوہر: کیونکہ تم روز مجھے جہنم بنا دیتی ہو!",
    },
    {
      setup: "پہلا دوست: تمہاری بیوی کیسی ہے؟",
      punchline: "دوسرا دوست: زندہ ہے، بس یہی کافی ہے!",
    },
    {
      setup: "استاد: تم نے ہوم ورک کیوں نہیں کیا؟",
      punchline: "شاگرد: سر، بجلی چلی گئی تھی!",
    },
    {
      setup: "بیوی: مجھے تحفہ کیوں نہیں دیا؟",
      punchline: "شوہر: صبر کرو، اللہ صبر کرنے والوں کے ساتھ ہے!",
    },
    {
      setup: "لڑکی: کیا تم مجھے یاد کرتے ہو؟",
      punchline: "لڑکا: نہیں، صرف خواب میں ہی آتی ہو!",
    },
    {
      setup: "استاد: سب سے مشکل کام کیا ہے؟",
      punchline: "شاگرد: سر، صبح جلدی اٹھنا!",
    },
    {
      setup: "بیوی: آج کھانا کیوں نہیں بنایا؟",
      punchline: "شوہر: آج چھٹی ہے، خود بنا لو!",
    },
    {
      setup: "شوہر: میں نے آج بہت محنت کی ہے!",
      punchline: "بیوی: پھر آرام کرو، خواب میں ہی اچھا کام کرو!",
    },
  ];

  //fetcj Joke Function
  const fetchJoke = async (language: any) => {
    if (language === "urdu") {
      // Display a random Urdu joke
      const randomIndex = Math.floor(Math.random() * jokesInUrdu.length);
      setJoke(jokesInUrdu[randomIndex]);
    } else {
      // Fetch a random English joke
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();
        setJoke({ setup: data.setup, punchline: data.punchline });
      } catch (error) {
        setJoke({ setup: "Failed to Fetch Data", punchline: "" });
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-3xl font-bold min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-full md:py-24 w-full text-center text-black">
        <h2 className="text-2xl font-semibold mb-4">
          {joke.setup || "Click below to get a joke!"}
        </h2>
        <h3 className="text-xl text-gray-700 mb-4">{joke.punchline}</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button
            onClick={() => fetchJoke("english")}
            className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-all ease-in-out duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Get English Joke
          </button>
          <button
            onClick={() => fetchJoke("urdu")}
            className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all ease-in-out duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Get Urdu Joke
          </button>
        </div>
      <div className="relative text-lg sm:text-xl text-black mt-8 text-center">
        <Link href="/" className="hover:underline">
          Back to Home
        </Link>
      </div>
      </div>
    </div>
  );
}
