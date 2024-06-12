import React from "react";
import {
  Accordion as MTAccordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Accordion() {
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
        How much does a session cost on Dhunguru?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Pricing with our Gurus will depend on a number of factors. Teachers come with different experience, quality and skillset, so each of them will have a different price depending on the above factors.
Every Guru will have their own set of prices listed on our Platform. You can check their profiles to know more about the pricing.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 2}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(2)}>
        Can I request a trial session?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Dhunguru offers all its users ‘First Class Free’. You can create an account with us and request a free session from the Guru of your choice. Alternatively, you can select ‘Book a Free Session’ on our home page, fill all your details and we will get back to you for your free session.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 3}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(3)}>
        How do I schedule my session?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Once you’ve bought your sessions and want to schedule, you need to follow the below process:-
Sign In ➝ Move cursor to ‘My Dashboard’ ➝ Select ‘Schedule’ ➝ Click ‘Schedule s session’ ➝ Select Guru, Instrument, date and time ➝ Click ‘Send Schedule Request’
After you send the request, it will go to your selected Guru who can then either approve or deny the schedule request. If the Guru approves, your session will be scheduled for the selected date and time and if he/she is not available and denies the request, you will receive a message to re-schedule the session.
However, it is advisable that you speak to your Guru on our messanger to finalize the date and time before sending a session request to the Guru, to avoid any rescheduling later.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 4}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(4)}>
        Can I take group sessions?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Currently, we do not offer group sessions. However, very soon we are going to launch a program specially curated for group sessions.
Stay tuned for further updates!
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 5}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(5)}>
        Will I get a recording of the session?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        Each session conducted through our Platform is recorded and the recording stays on student’s dashboard. Student can revisit the recorded session anytime to practise.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 6}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(6)}>
        What is your cancellation and re-scheduling policy for the lessons?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        We request you to cancel or re-schedule a session at least 6 hours prior to the session time. A bigger notice period will always be appreciated more as the Guru gets more time to schedule session with some other student who might want to take a session at that particular time.
If you cancel/re-schedule as stated above, you will not be charged for that session.
If you cancel/re-schedule within 6 hours of the session time, your request will go to your Guru, who will then have the discretion to either charge or not charge for the session. If he decides to charge, the session will be deducted from your balance.
However, we tend to give a leeway to all our subscribers. If you had to cancel/re-schedule late because of an emergency, you can report it to us and we will look into it on a case by case basis.
If you have only 1 session left, you will not be allowed to re-schedule it post the 6 hours deadline. However, you can request cancellation explaining your reason and if your Guru decides not to charge for it, you can avail the session on a new date and/or time.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 7}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(7)}>
        How do I cancel or re-schedule my session?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        You need to login to your account. After reaching dashboard, click on the ‘schedule’ tab in ‘My Dashboard’, from where you can further re-schedule or cancel a booked session.
Your request will go to your ‘Guru’ for approval who will be able to make necessary changes to the booked session.
Cancellation Process:
Sign In ➝ My Dashboard ➝ Schedule ➝ Click ‘Scheduled Sessions’ ➝ Select the session to be cancelled ➝ Select ‘Settings Gear’ on top right corner ➝ Click Cancel ➝ Write a reason for cancellation.
Re-schedule Process:
Sign In ➝ My Dashboard ➝ Schedule ➝ Click ‘Scheduled Sessions’ ➝ Select the session to be re-scheduled ➝ Select ‘Settings Gear’ on top right corner ➝ Click re-schedule ➝ Pick a new date and/or time and write a reason for re-scheduling.
If you have only 1 session left, you will not be allowed to re-schedule it post the 6 hours deadline. However, you can request cancellation explaining your reason and if your Guru decides not to charge for it, you can avail the session on a new date and/or time.
        </AccordionBody>
      </MTAccordion>
      <MTAccordion open={open === 8}>
        <AccordionHeader className='text-white hover:text-white text-base font-bold' onClick={() => handleOpen(8)}>
        Will I get a refund if the internet connectivity was not good and the session could not be completed?
        </AccordionHeader>
        <AccordionBody className='text-white hover:text-white text-base'>
        We will provide you full refund if the internet connectivity problem was at Guru’s end. However, if the problem was at your end, the session will be charged from you. You are advised to check your internet connectivity and your zoom settings before joining the session. The link for your scheduled session will show up on your dashboard 30 minutes prior to the session, which you can use to check your zoom and internet settings.
        </AccordionBody>
      </MTAccordion>
      
      
    </div>
    </div>
  );
}

export default Accordion;
