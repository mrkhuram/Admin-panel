import React from 'react'
import { Link } from 'react-router-dom'

class ReaderMessages extends React.Component {
    render() {
        return (
            <>
            <div class="content-wrapper">

                <div class="chat_section">
                    <div class="row">
                        <div class="col-xs-12 col-md-9" data-wow-delay="0.1s">
                            <div class="chat_container">
                                <div class="chat_header">
                                    <h2 class="section-title" >Chat With babar</h2>
                                </div>
                                <div class="chat_body scrollBottom">
                                    <ul>
                                        <li class="chat_row receiver">
                                            <div class="chat_box">
                                                <article class="message">Hello how are you</article>
                                                <div class="date">04/09/2019</div>
                                            </div>
                                        </li>
                                        <li class="chat_row sender">
                                            <div class="chat_box">
                                                <article class="message">Hello how are you</article>
                                                <div class="date">04/09/2019</div>
                                            </div>
                                        </li>
                                        <li class="chat_row receiver">
                                            <div class="chat_box">
                                                <article class="message">
                                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
								</article>
                                                <div class="date">04/09/2019</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <form method="post" action="#" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label>Your Message</label>
                                    <textarea name="message" class="form-control" id="msg_box" rows="5"></textarea>
                                </div>
                                <button type="submit" name="sendMessage" class="btn section-btn2" ><i class="fa fa-send-o"></i> Send Message</button>
                                <br />
                                <br />
                            </form>
                        </div>
                        <div class="col-xs-12 col-md-3" data-wow-delay="0.5s">
                            <div class="rightSidebar">
                                <h2>All Readers <span class="badge pull-right">28</span></h2>
                                <ul class="list-group">
                                    <li class="list-group-item"><a href="#"><img src="assets/images/testimonial/testimonial1.png" /> John Doe</a></li>
                                    <li class="list-group-item online"><a href="#"><img src="assets/images/testimonial/testimonial2.png" /> Akram Rao</a></li>
                                    <li class="list-group-item"><a href="#"><img src="assets/images/testimonial/testimonial3.png" /> John Doe</a></li>
                                    <li class="list-group-item"><a href="#"><img src="assets/images/testimonial/testimonial1.png" /> Akram Rao</a></li>
                                    <li class="list-group-item"><a href="#"><img src="assets/images/testimonial/testimonial2.png" /> John Doe</a></li>
                                    <li class="list-group-item"><a href="#"><img src="assets/images/testimonial/testimonial3.png" /> Akram Rao</a></li>
                                    <li class="list-group-item online"><a href="#"><img src="assets/images/testimonial/testimonial1.png" /> John Doe</a></li>
                                    <li class="list-group-item online"><a href="#"><img src="assets/images/testimonial/testimonial2.png" /> Akram Rao</a></li>
                                    <li class="list-group-item"><a href="#"><img src="assets/images/testimonial/testimonial3.png" /> John Doe</a></li>
                                    <li class="list-group-item"><a href="#"> <img src="assets/images/testimonial/testimonial1.png" /> Akram Rao</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
    }
}
export default ReaderMessages;