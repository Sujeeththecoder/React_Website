import React from "react";
import {
  Accordion as MTAccordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Faq() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="ml-20 m-25 pl-20 pr-20 mr-20 mt-20 mb-20 justify-center items-center">
      <div>
        <h1 className="font-bold text-white text-2xl">FAQs</h1>
      </div>
    <div>
      <MTAccordion open={open === 1}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(1)}>
        How can I apply as a Guru with Dhunguru?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        To become a Guru with us, you must be:-
above 18 Years of age;
having at least one year of teaching experience;
in possession of the instrument you want to teach; and
having a computer and internet facility at home.
After these conditions are met, you need to visit ‘BECOME A GURU’ section on our website. Select ‘Get Started’ on that page and complete the required details. After signing up, you will be prompted to complete your Guru profile. Once the profile is completed by you, it’ll come to our team for approval. You will be able to teach after we approve your profile.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 2}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(2)}>
        How do I add a new subject/Instrument?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Please follow the below process
Login ➝ My Classroom ➝ Add New Subject/Instrument ➝ Fill the details ➝ Add Pictures and Videos, if any ➝ Click Continue ➝ Set your price and discounts
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 3}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(3)}>
        Are there any timings to teach?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        As a platform, Dhunguru allows all its Gurus to teach 24*7 as per their availability
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 4}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(4)}>
        Can I become a Guru without any formal qualification in Music?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Yes, you can. You do not need any formal qualification in music to be a Guru with Dhunguru.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 5}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(5)}>
        How does my profile move up the list of Gurus?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Every Guru profile will have a score that will be determined by the student reviews. Better the reviews, higher will be your ranking in the list of Gurus.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 6}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(6)}>
        How will I get my students?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        DhunGuru takes 100% responsibility for marketing of all their Gurus. Through our extensive marketing campaigns, we make sure that all our Gurus stay busy giving music sessions for most part of the day.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 7}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(7)}>
        How will I get to know if someone booked a session with me?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        You will receive a notification on your dashboard under ‘Session Request’ that you’d need to approve. You will also receive an email and text message for the same.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 8}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(8)}>
        What is your cancellation policy?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        We request you to cancel or re-schedule a session at least 6 hours prior to the session time. A longer notice period will always be appreciated more as we must value the student’s time.
If you cancel/re-schedule as stated above, there won’t be any penalty.
If you cancel/re-schedule within 6 hours of the session time, it’ll be considered a no-show and you will be penalised. As penalty, you will be required to offer a free session on a new date and/or time, as compensation for that missed session, i.e. you will not be paid for that compensatory session.
However, we tend to give a leeway to all our subscribers. If you had to cancel/re-schedule late because of an emergency, you can report it to us and we will look into it on a case by case basis.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 9}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(9)}>
        Can I exchange contact details with a student?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        NO. Teachers are strictly prohibited from sharing any contact details with any student. Any Teacher found doing so, shall be blocked from using the Platform and your Teacher Profile shall be deleted permanently from the Platform. In addition to the above, in the event a Teacher is found to be in breach of this, you shall be liable to pay the Platform, damages to the tune of Rupees Ten Thousand (Rs. 10,000/-).
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 10}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(10)}>
        Am I employed by Dhunguru?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        NO. All Gurus on our Platform are independent contractors offering services to students and are not employees of Dhunguru.
        </AccordionBody>
      </MTAccordion>
      
    </div>
    </div>
  );
}

export default Faq;
