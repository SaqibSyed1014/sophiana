function ContactForm() {
    return (
        <section>
            <h2 className="divider-heading text-center text-2xl italic">
                <span>Please fill the form below</span>
            </h2>

            <div className="bg-skin mt-20 py-20 px-40">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="image-wrapper flex items-center justify-center">
                            <img src="/imgs/contact-form-img.png" alt="Contact Illustration"/>
                        </div>
                        <form className="contact-form grid md:grid-cols-2 gap-2 xl:gap-4">
                            <div>
                                <input type="text" placeholder="First Name *"/>
                            </div>
                            <div className="">
                                <input type="text" placeholder="Last Name *"/>
                            </div>
                            <div className="col-span-2">
                                <input type="text" placeholder="Email Address *"/>
                            </div>
                            <div className="col-span-2">
                                <input type="text" placeholder="Company *"/>
                            </div>
                            <div className="col-span-2">
                                <input type="text" placeholder="Location *"/>
                            </div>
                            <div className="col-span-2">
                                <input type="text" placeholder="Phone Number *"/>
                            </div>
                            <div className="col-span-2">
                                <div className="field-wrapper">
                                    <p className="font-inter text-base pb-2">TELL US WHO YOU ARE*</p>
                                    <label className="custom-radio-btn">
                                        <input name="radio" type="radio" />
                                        <span>JEWELLER</span>
                                    </label>
                                    <label className="custom-radio-btn">
                                        <input name="radio" type="radio" />
                                        <span>PERSONAL SHOPPER</span>
                                    </label>
                                    <label className="custom-radio-btn pb-2">
                                        <input name="radio" type="radio" />
                                        <span>COLLECTORS</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <input type="text" placeholder="whatsapp/line/wechat *"/>
                            </div>
                            <div className="col-span-2">
                                <textarea rows="10" placeholder="MESSAGE*  For applying, please include your website, social media if you have any *"/>
                            </div>

                            <div className="col-span-2 text-center">
                                <button
                                    className="border-[1px] border-[#878787] text-[#333232] font-inter font-medium tracking-widest uppercase w-auto text-lg px-24 py-3">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
