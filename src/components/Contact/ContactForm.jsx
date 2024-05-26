

function ContactForm() {
  return (
<section className="bg-[#1F283B] md:mx-10 lg:mx-[85px] xl:mx-[120px] py-8 sm:py-0 md:py-[72px]  md:rounded-[20px] lg:rounded-[35px]">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-white-500 text-white sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-white dark:text-white-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-white-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-[#38B5C6] focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[rebeccapurple] animate__animated animate__flash">Send message</button>
      </form>
  </div>
</section>
  );
}

export default ContactForm;
