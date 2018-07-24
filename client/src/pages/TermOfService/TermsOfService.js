import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";



class TermsOfService extends Component {

    render() {
        return (
            <Container fluid>
                <p className="terms">
                    <h2>1. GENERAL</h2>
                    <h4>By uploading an image or video you guarantee that you have read these Terms and Conditions for uploading images, photos
                        and videos (Image/s) to memePie and that you agree to abide by all clauses within these Terms and Conditions. You
        also understand and agree that nothing in this agreement obligates memePie to display or use your Images.</h4>

                    <h2>2. COPYRIGHT OWNERSHIP</h2>
                    <h4>By uploading an Image to memePie you guarantee that you are the legal owner of the copyright of that Image, or have been
                        awarded full and unrestricted rights from the copyright owner to upload and utilise the Image for the purposes of
                        memePie. Images that are considered to infringe the copyright or trademarks of other individuals, organisations or
        companies will be deleted.</h4>

                    <h2>3. THIRD PARTY RIGHTS</h2>
                    <h4>By uploading an Image you guarantee that such use of the Image in memePie does not violate the rights of any other party,
                        does not result in a breach of contract between you and another party and that you accept responsibility for any
        royalties or fees due to any other party from the use of the uploaded Image.</h4>

                    <h2>4. PEOPLE SEEN IN IMAGES</h2>
                    <h4>By uploading an Image you guarantee that any people which are clearly identifiable have consented to have their likeness
                        printed or displayed, or that you have full rights to use the Image in this manner and accept full responsibility
        for such use.</h4>

                    <h2>5. ACCEPTING AND REJECTING IMAGES</h2>
                    <h4>All Images uploaded to memePie are subject to being assessed by a memePie Moderator for suitability. This Moderator will either reject
                        or accept each Image for use. Images that are rejected will be deleted from memePie entirely, with
                        no copies remaining in the system. The decisions of the Moderator are irrevocable. Alan Rogers reserves the right
        to reject and remove any uploaded Image from display on its website, for any reason, at any time, without prior notice.</h4>

                    <h2>6. RESPONSIBILITY FOR CONTENT</h2>
                    <h4>When uploading an Image you are solely responsible for its content and for any offence, claims or damages that arise
                        from the content of that Image. The approval and publication of Images in memePie in
                        no way alters or diminishes your responsibility. Nor does it transfer any responsibility for the content of the Image
        to memePie or the Moderator who approves the Image for publication.</h4>

                    <h2>7. RIGHTS GRANTED TO memePie</h2>
                    <h4>memePie does not claim any copyright or any kind of ownership rights to the Images you upload to memePie. However,
                        by uploading an Image to memePie you thereby grant to memePie and its licensees a royalty-free, non-exclusive,
                        worldwide right to copy, crop, reproduce, edit, publish, display, distribute or otherwise use the image or video
                        publically in all languages and all media, whether now known or hereinafter devised, including without limitation
        including in our database in perpetuity.</h4>

                    <h2>8. NO DERIVATIVE WORKS OF USER IMAGES</h2>
                    <h4>memePie guarantees that it will not create any derivative work from your Images nor modify the content without your
                        consent, though it reserves the right to crop images or videos or to make adjustments to the brightness, exposure,
        colours or general appearance of any Image that it believes warrants such adjustment for the purpose of better display.</h4>

                    <h2>11. INDEMNITY FROM CLAIMS</h2>
                    <h4>You agree to indemnify and hold memePie and its subsidiaries, affiliates, officers, employees and representatives
                        free from any claim or demand made by any third party due to or arising out of your uploading to memePie of any
                        Images or from any violation of any other party's rights caused by the use of or the content within the Images you
        upload.</h4>

                    <h2>12. UPDATING THESE TERMS AND CONDITIONS</h2>
                    <h4>memePie reserves the right in its sole and absolute discretion to alter these terms at any time for any reason without
        prior notice. You are responsible for keeping yourself updated on any such changes herein that might affect you.</h4>

                    <h2>9. SELECTED IMAGES FOR PROMOTIONS</h2>
                    <h4>memePie may select certain Images that you upload to the memePie for promotional activities of memePie’ business,
        including but not limited to: use in memePie’s own promotional materials either on-line or in printed form.</h4>
                </p>
            </Container >
        )
    }
};

export default TermsOfService;