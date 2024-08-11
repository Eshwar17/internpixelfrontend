import React, { useEffect, useRef } from 'react';
import './LinkedInBadge.css';

const Linkedin = () => {
    const badgesContainerRef = useRef(null);

    const badges = [
        // Add your badges here as in the previous code
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="sneka16" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sneka16?trk=profile-badge">Sneka P</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="j-nithyasree" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/j-nithyasree?trk=profile-badge">J NITHYASREE</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="ayush9650" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/ayush9650?trk=profile-badge">Ayush Dubey</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="vaibhav-kolla-8bba41272" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/vaibhav-kolla-8bba41272?trk=profile-badge">Vaibhav Kolla</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="sherbin-s-07704a249" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sherbin-s-07704a249?trk=profile-badge">Sherbin S</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="dilhaque-ahemmed-cp-1a71ba228" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/dilhaque-ahemmed-cp-1a71ba228?trk=profile-badge">DILHAQUE AHEMMED CP</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="annam-rajesh-74707b263" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/annam-rajesh-74707b263?trk=profile-badge">ANNAM RAJESH</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="harish-sathiyamoorthi-a329b223b" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/harish-sathiyamoorthi-a329b223b?trk=profile-badge">Harish Sathiyamoorthi</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="bhavishya-sahay-043359245" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/bhavishya-sahay-043359245?trk=profile-badge">Bhavishya Sahay</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="kushwahaabhishek33" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/kushwahaabhishek33?trk=profile-badge">Abhishek Kushwaha</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="s-rashmi" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/s-rashmi?trk=profile-badge">Rashmi S</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="abdeali-dahodwala-169083268" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/abdeali-dahodwala-169083268?trk=profile-badge">Abdeali Dahodwala</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="rhythmica-a-m-591687232" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/rhythmica-a-m-591687232?trk=profile-badge">Rhythmica A. M.</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="yogesh-palve" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/yogesh-palve?trk=profile-badge">Yogesh Palve</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="tanishk-sonani" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/tanishk-sonani?trk=profile-badge">TANISHK SONANI</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="sudhanshu-singh18" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sudhanshu-singh18?trk=profile-badge">Sudhanshu Singh</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="prathamesh-walvekar-53310524b" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/prathamesh-walvekar-53310524b?trk=profile-badge">Prathamesh Walvekar</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="swayam-kumar-das-b863a4290" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/swayam-kumar-das-b863a4290?trk=profile-badge">Swayam Kumar Das</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="izharidrisi" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/izharidrisi?trk=profile-badge">Izhar Idrisi</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="kumar-abhinav-b81848236" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/kumar-abhinav-b81848236?trk=profile-badge">Kumar Abhinav</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="shaik-majid-basha-7a1128233" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/shaik-majid-basha-7a1128233?trk=profile-badge">Shaik Majid Basha</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="himanshu-tiwari-733b93247" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/himanshu-tiwari-733b93247?trk=profile-badge">Himanshu Tiwari</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="sai-sumanth-193947246" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sai-sumanth-193947246?trk=profile-badge">Sai Sumanth</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="ayush-dharwad-153b90275" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/ayush-dharwad-153b90275?trk=profile-badge">Ayush Dharwad</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="rajesh-balamurugan-6ab46a26a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/rajesh-balamurugan-6ab46a26a?trk=profile-badge">Rajesh Balamurugan</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="sohil-savanur-23a175261" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sohil-savanur-23a175261?trk=profile-badge">Sohil Savanur</a></div>`,
        `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="shreyas-jadhav-625505276" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/shreyas-jadhav-625505276?trk=profile-badge">Shreyas Jadhav</a></div>`,
        `<div class=""badge-base LI-profile-badge"" data-locale=""en_US"" data-size=""large"" data-theme=""light"" data-type=""VERTICAL"" data-vanity=""1arshh"" data-version=""v1""><a class=""badge-base__link LI-simple-link"" href=""https://in.linkedin.com/in/1arshh?trk=profile-badge"">Harsh Raj</a></div>
              `,
              `<div class=""badge-base LI-profile-badge"" data-locale=""en_US"" data-size=""medium"" data-theme=""light"" data-type=""VERTICAL"" data-vanity=""ashish-shrivastav-752442257"" data-version=""v1""><a class=""badge-base__link LI-simple-link"" href=""https://in.linkedin.com/in/ashish-shrivastav-752442257?trk=profile-badge"">Ashish Shrivastav</a></div>
              `,
              `"<div class=""badge-base LI-profile-badge"" data-locale=""en_US"" data-size=""medium"" data-theme=""light"" data-type=""VERTICAL"" data-vanity=""prithiviraj-a-766571195"" data-version=""v1""><a class=""badge-base__link LI-simple-link"" href=""https://in.linkedin.com/in/prithiviraj-a-766571195?trk=profile-badge"">prithiviraj A</a></div>
              "`,
              `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="shadabp1" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/shadabp1?trk=profile-badge">Mohammad Shadab</a></div>`,
              `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="dimple-madhwani-541407251" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/dimple-madhwani-541407251?trk=profile-badge">Dimple Madhwani</a></div>`,
              `"<div class=""badge-base LI-profile-badge"" data-locale=""en_US"" data-size=""large"" data-theme=""light"" data-type=""VERTICAL"" data-vanity=""sai-kiran-267297275"" data-version=""v1""><a class=""badge-base__link LI-simple-link"" href=""https://in.linkedin.com/in/sai-kiran-267297275?trk=profile-badge"">Sai Kiran</a></div>
              "`,
              `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="harshitkk11" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/harshitkk11?trk=profile-badge">Harshit kumar</a></div>`
    ];

    useEffect(() => {
        const badgesContainer = badgesContainerRef.current;
        let scrollAmount = 0;
        const scrollInterval = setInterval(() => {
            if (badgesContainer) {
                if (scrollAmount >= badgesContainer.scrollHeight - badgesContainer.clientHeight) {
                    scrollAmount = 0; // Reset scroll amount
                    badgesContainer.scrollTo(0, 0);
                } else {
                    scrollAmount += 1; // Adjust scroll speed here
                    badgesContainer.scrollTo(0, scrollAmount);
                }
            }
        }, 20); // Adjust interval speed here

        return () => clearInterval(scrollInterval);
    }, []);

    return (
      <>
      <script src="https://platform.linkedin.com/badges/js/profile.js" type="text/javascript"></script>
        <div className="badges-container" ref={badgesContainerRef}>
        
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="sneka16" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sneka16?trk=profile-badge">Sneka P</a></div>
        </div></>
    );
};

export default Linkedin;
