const img =document.getElementById('img');
const img2 =document.getElementById('img2');
const regbtn =document.getElementById('regbtn');
const regbtn2 =document.getElementById('regbtn2');
const event_name =document.getElementById('event_name');
const subname =document.getElementById('subname');
const about =document.getElementById('about');
const event_details =document.getElementById('event_details');
const prizes =document.getElementById('prizes');
const judging_criteria =document.getElementById('judging_criteria');
const elegibility =document.getElementById('elegibility');
const guidelines =document.getElementById('guidelines');
const sub_details =document.getElementById('sub_details');
const contact =document.getElementById('contact');
const timeline =document.getElementById('timeline');

function eventName(){
  img2.src = ``;

  img.src = ``;
  regbtn.href=``;
  event_name.innerHTML=``;
  subname.innerHTML=``;
  about.innerHTML=``;
  event_details.innerHTML=``;
  prizes.innerHTML=``;
  judging_criteria.innerHTML=``;
  elegibility.innerHTML=``;
  guidelines.innerHTML=``;
  sub_details.innerHTML=``;
  contact.innerHTML=``;
  timeline.innerHTML=``;
}

function picomix(){
  img2.src = `./img/events/picomix.jpg`;

  img.src = `./img/events/picomix.jpg`;

  $('#regbtn2').attr('href','https://forms.gle/przUVdSMPNk2rNi27');

  $('#regbtn').attr('href','https://forms.gle/przUVdSMPNk2rNi27');

  event_name.innerHTML=`PICOMIX`;

  subname.innerHTML=`Online photography and drawing comics event`;

  about.innerHTML=`
  Are your creative senses tingling?
  Because now you have an amazing challenge, an opportunity to bring out more out of mere digital photos.<br><br>
𝗧𝗲𝗹𝗹 𝘂𝘀 𝗮 𝗹𝗶𝘁𝘁𝗹𝗲 𝘀𝘁𝗼𝗿𝘆 𝗯𝘆 𝗺𝗮𝗸𝗶𝗻𝗴 𝗮 𝗳𝗼𝘂𝗿 𝗽𝗮𝗻𝗲𝗹 𝗰𝗼𝗺𝗶𝗰 𝗼𝘂𝘁 𝗼𝗳 𝗽𝗶𝗰𝘁𝘂𝗿𝗲𝘀 𝘁𝗵𝗮𝘁 𝘆𝗼𝘂 𝗰𝗹𝗶𝗰𝗸𝗲𝗱.<br><br>
Draw over the images using digital tools such as Photoshop, Illustrator, Sketchbook, Krita, Procreate, 
and even the instagram drawing tool if you like to torment yourself! Manage to impress the judges and
you shall find a place rare amongst creators, a champion of photography, art and literature!
  `;
event_details.innerHTML =`


  `;
  prizes.innerHTML=`
    Prizes in each category &minus;<br>
 Winner awarded with ₹1000, <br>
Runner up awarded with ₹750 for first event and ₹500 for the second event respectively.
  `;

  judging_criteria.innerHTML=`
    There will be 3 judges for the event, and judging will be based on how unique the idea is,
and how much it makes us feel/think.
  `;

  elegibility.innerHTML=`
  <ol>
<li>Students from the IISERs, NISER, IISC, CEBS only are allowed to participate in the
event. Alumnus not allowed to participate.</li>
<li>This is a solo online event.</li>
</ol>
  `;



  guidelines.innerHTML=`
The event consists of two parts:
<ol type="A:">
<li> Make a 4&minus;panel comic using pictures you clicked, by adding drawings/text on top with a digital drawing/editing software</li>
<li> Transform 1 image that you’ve clicked by adding drawings/text on top with a digital drawing/editing software</li>
</ol>
<ol>
<li>Only digital submissions are accepted, i.e. the participant cannot take a printout of their
picture and draw over it.</li><li>
Comic has to be 4 panels in length.</li><li>
One entry per event per person is allowed, i.e. a person can have two entries in total.
Both events will be judged separately.</li><li>
You cannot overlay pre&minus;existing ClipArt over the images for the events, everything will
have to be hand&minus;drawn. You can however edit text onto the image.</li><li>
The picture has to be clicked by the participant. You will have to provide EXIF
information of the images used for verification. (details mentioned below)</li><li>
There is no particular theme for the comic/image, just go with the flow! </li><li>
Name your entry in the format, Name_Institute </li>
</ol>
<br>Apps that can be used for the event :
<br>Note that we’re putting a cap on the “advancedness” of the software to make it fair to
participants who might not have access to most tools
<ul style="list-style-type:disc;">
<li>PicsArt</li><li>
Autodesk Sketchbook</li><li>
Instagram</li><li>
 Google Storyboard (for comics)</li><li>
 Adobe Inkscape (laptop only)</li>
</ul>
<br>EXIF information :
<ol>
<li>Share EXIF info for each of the images used.</li><li>
<ol type="a">
<li> To find EXIF info in the gallery app go to the menu and tap on info.</li>
<li> For Google photos you just need to swipe up to find EXIF info.</li>
<li>If you're using a PC just right click on the photo and go to 
properties to find EXIF info.</li>
</ol></li>
<li> Share the original image you used to create the entry.</li>
</ol>
  `;

  timeline.innerHTML =`
  <ul style="list-style-type:disc;">
<li> 6th March &minus; Registration google form opens for entries.</li><li>
  27th March &minus; Registration google form closes.</li><li>
  3rd April &minus; Announcement of results</li>
</ul>
  `;

  sub_details.innerHTML=`
Entries must be submitted using the google form which will be circulated.

<br><br>Entries may be uploaded on social media by the Revival Core Committee, strictly subject to their convenience. 
<br>By participating, you give consent to the Revival Core Committee for such use. 
<br>In case of any issue, do contact your respective institute’s Revival Secretary.
`;

  contact.innerHTML=`
  <ul style="list-style-type:disc;">
<li>Sagnik C &minus; +91 9748216919</li><li>
 Gowri N  &minus; +91 8086030097  <a href="https://www.instagram.com/_._gowriii/" style="color:blue;">@_._gowriii</a></li><li>
  <a href="https://www.instagram.com/pixels_iiserpune/?hl=en" style="color:blue;">@pixels_iiserpune</a></li><li>
  <a href="https://www.instagram.com/artclub_iiserp/?hl=en" style="color:blue;">@artclub_iiserp</a></li>
</ul>

  `;

  //show the popup

 document.getElementById('container').style.display='block';

};

function articulate(){
  img2.src = `./img/events/articulate.png`;

  img.src = `./img/events/articulate.png`;

  $('#regbtn2').attr('href','https://forms.gle/XQPFsMrjcXstYXtm7');

  $('#regbtn').attr('href','https://forms.gle/XQPFsMrjcXstYXtm7');

  event_name.innerHTML=`ARTICULATE`;

  subname.innerHTML=`𝗦𝗵𝗼𝗿𝘁 𝘀𝘁𝗼𝗿𝘆 𝘄𝗿𝗶𝘁𝗶𝗻𝗴 & 𝗯𝗼𝗼𝗸 𝗰𝗼𝘃𝗲𝗿 𝗱𝗲𝘀𝗶𝗴𝗻𝗶𝗻𝗴 𝗰𝗼𝗻𝘁𝗲𝘀𝘁`;

  about.innerHTML=`
  A refreshing take on artistry, ARTiculate asks you to express yourself with both paints and prose. Let's see who can concoct the best piece of creative craftsmanship!<br><br>

𝗣𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝘄𝗶𝗹𝗹 𝗻𝗲𝗲𝗱 𝘁𝗼 𝗽𝗲𝗻 𝗱𝗼𝘄𝗻 𝗮 𝘀𝘁𝗼𝗿𝘆 𝗿𝗲𝘃𝗼𝗹𝘃𝗶𝗻𝗴 𝗮𝗿𝗼𝘂𝗻𝗱 𝗮 𝗴𝗶𝘃𝗲𝗻 𝗮𝗯𝘀𝘁𝗿𝗮𝗰𝘁, 𝗳𝗼𝗹𝗹𝗼𝘄𝗲𝗱 𝗯𝘆 𝗺𝗮𝗸𝗶𝗻𝗴 𝗮𝗻 𝗮𝘄𝗲𝘀𝗼𝗺𝗲 𝗰𝗼𝘃𝗲𝗿 𝗮𝗿𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝘀𝗮𝗺𝗲.<br><br>

The submission with the best combined score for the short story and the cover art will be crowned as the most ARTiculate work!

    `;

  event_details.innerHTML =`


  `;

  prizes.innerHTML=`
  The winner and the runner-up of the event will be awarded a prize of INR 2000 and INR 1000 respectively.
  `;

  judging_criteria.innerHTML=`
<ol>
<li>The literary judges will be provided with the full story, the relevant description and the cover image as well, and the literary aspect will be judged on the basis of a number point scale with different metrics (viz. creativity, grammar, structure) out of 10.</li><li>
  The art judges will also be provided with the artwork, the description/relevance of the artwork, and the full story for reference. They will judge only the art aspect, and how well it relates to the description, on a number metric, out of 10.</li><li>
  The short description of the cover art will not be judged on the basis of grammar or any literary metric, only the relevance with the story will be taken into consideration.</li><li>
  Detailed judging criterion will be mailed to the registered participants.</li>
</ol>

  `;

  elegibility.innerHTML=`
<ol>
<li>The participating group should be a currently enrolled student of any of the participating institutes (All IISERs, NISER, IISc, CEBS). Alumnus not allowed to participate.</li><li>
This is a group event of 2-4 students and will operate on the basis of submissions.</li>
</ol>
  `;

  guidelines.innerHTML=`
<ol>
  <li>The contestants will write a 500 - 750 words story based on the given abstract/prompt and then make a befitting cover art for their story.<br>
 They also need to write a brief description (50-100 words) about how the cover art relates to the story.</li><li>
  The cover art should not be made/edited digitally. It should be drawn/sketched/painted by you on paper.</li><li>
  The abstract/prompts will be provided after registration.<br>
Registration will be open from 9th to 13th March 2021.<br>
After 13th, the registration time will be closed and
only those teams who had registered would be considered for judging.</li><li>
 All further communications with the participants will be done through the mail/contact provided in the registration form.</li><li>
 Any entries which are found to be plagiarised will be instantly disqualified.</li>
</ol>


  `;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
   <li>   March 9th: Google form Registrations opens.</li><li>
March 13th: Google form Registrations closes.</li><li>
 March 14th: Google form submission opens.</li><li>
 March 27th: Google form submission closes.</li>
<li>  April 4th: Result Declaration.</li>
</ul>
  `;

  sub_details.innerHTML=`
<ol>
<li>The cover art and the brief description should be in one pdf file and the story in another.</li><li>
The teams are expected to upload their pdf files (both story and [cover-art+description]) in a single drive folder and provide the link to the folder in the submission form.</li><li>
Do not mention the name of the participants anywhere in any of the documents.</li><li>
The file name for story should be of the format  “Articulate_teamname_story”, for the cover image and image description should be “Articulate_teamname_cover” and the drive folder should be “Articulate_teamname”.</li>
</ol>
  
Entries may be uploaded on social media by the Revival Core Committee, strictly subject to their convenience.
<br> By participating, you give consent to the Revival Core Committee for such use.<br>
 In case of any issue, do contact your respective institute’s Revival Secretary.
  `;

  contact.innerHTML=`
<ul style="list-style-type:disc;">
<li>  Arnab Lahiry (8697949062) <a href="https://www.instagram.com/spy.d_42/" style="color:blue;">@spy.d_42</a> (arnab@students.iisertirupati.ac.in) </li><li> 
  Chaitanya Chawak (9405907765) (chaitanyachawak@students.iisertirupati.ac.in)</li><li>
  Sushmita Halder (8929798359) (sushmitahalder@students.iisertirupati.ac.in) </li>
</ul>
  `;

  //show the popup

 document.getElementById('container').style.display='block';

}

function manthan(){
  img2.src = `./img/events/manthan.jpg`;

  img.src = `./img/events/manthan.jpg`;

  $('#regbtn2').attr('href','https://forms.gle/wpULajsYMRHto9ra6');

  $('#regbtn').attr('href','https://forms.gle/wpULajsYMRHto9ra6');

  event_name.innerHTML=`MANTHAN`;

  subname.innerHTML=`Online Drama Event`;

  about.innerHTML=`
    NISER presents Manthan, a drama event that, not unlike its name, will amalgamate seemingly unrelated characters 
from the world of literature and cinema. A refreshing change from the usual drama events, we invite acts where the 
personalities of these random characters must be preserved. Thereby, the end result should be a unique production of a fun and coherent plot.<br><br>

    So come on, bring your ‘A’ game to us! Put on your thinking caps, and wait for us to unleash the characters on you!.

    `;

  event_details.innerHTML =`
  `;

  prizes.innerHTML=`1st Prize: 3000 INR <br><br>
Runner’s Up: 1500 INR

  `;

  judging_criteria.innerHTML=`
<ul style="list-style-type:disc;">
<li>Facial expressions, body language, dialogue delivery by actors and theme, plot development, character utilisation of the script will be prime considerations for judgement.</li><li>
There will be negative marking if the upper cap of the video limit is exceeded.</li><li>
Finer video editing would gain extra points. </li>
</ul>



  `;

  elegibility.innerHTML=`The participating group should be currently enrolled students of the participating institutes-IISERS, NISER, IISc and CEBS. Alumnus not allowed to participate.

  `;

  guidelines.innerHTML=`
<ol>
<li>This is a group event and will operate on basis of video submissions.</li><li>
    Each group would be given 4 random characters and they need to evolve a plot to present all four characters in a single play.</li><li>
    A team can choose extra two characters of their choice to assist their plot. So a maximum of 6 students can participate.</li><li>
All participants are required to fill the form within the deadline and all further communications will be done through the mail/contact provided in the form.</li><li>
Further instructions, mode of submission and character assignments will be sent out to the participants within 48 hours of their registration.</li><li>
The video should be maximum of 15 mins in landscape mode. The videos can be shot individually (keeping in mind that people may be at home, not on campus) with one person per frame which should be then compiled into a single video play.</li><li>
The play can be in any language but English subtitles are mandatory.</li><li>
The script should be uploaded with a video file in English language only.</li><li>
Please avoid abusive or derogatory speech.</li>
</ol>
  `;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
<li>Registration opens on 7th march 2021.</li><li>
Registration form should be filled latest by 13th March 2021, 11:59pm.</li><li>
Deadline for submission of the video of the play will be 28th March 2021, 11:59pm.</li><li>
Result of the judgement will be made available by Revival Closure.</li>
</ul>


  `;

  sub_details.innerHTML=``;

  contact.innerHTML=`
<ul style="list-style-type:disc;">
<li>Subham Mishra- 9178505655, subham.mishra@niser.ac.in, <a href="https://www.instagram.com/_mr.mishra_/" style="color:blue;">@_mr.mishra_</a> </li><li>
Nikhil Kumar- 9470431483,  nikhilkumar18@niser.ac.in <a href="https://www.instagram.com/el_professor_/" style="color:blue;">@el_professor_</a> </li><li>
Tanya Pattnaik- 8118031373, tanya.pattnaik@niser.ac.in <a href="https://www.instagram.com/her_nerdiness/" style="color:blue;">@her_nerdiness </a></li>
</ul>

  `;

  //show the popup

 document.getElementById('container').style.display='block';

};

function trashion(){
  img2.src = `./img/events/trashion.jpg`;

  img.src = `./img/events/trashion.jpg`;

  $('#regbtn2').attr('href','https://docs.google.com/forms/d/e/1FAIpQLSfJsQyYN7QwUxIIY8UnDT2kqjoL7pEp9i0Q8ZqbicvQ-1IHtw/viewform');

  $('#regbtn').attr('href','https://docs.google.com/forms/d/e/1FAIpQLSfJsQyYN7QwUxIIY8UnDT2kqjoL7pEp9i0Q8ZqbicvQ-1IHtw/viewform');

  event_name.innerHTML=`TRASHION`;

  subname.innerHTML=`Online fashion event`;

  about.innerHTML=`Are you a spendthrift who ponders a lot about the unaffordability of fashion? Are you someone who craves the joy of trying on the most novel clothing during the pandemic? Do you have a creative streak? If yes, then “trashion” is just for you! Be the trend you wish to see!
Trashion presents a unique opportunity to creatively unleash your inner fashionista, that too on a budget! Design your own apparel with trash and become a fashion influencer yourself!
      `;

  event_details.innerHTML =`
  `;

  prizes.innerHTML=`
<ul style="list-style-type:disc;">
<li>      Winner - Rs 1500 </li><li>
1st Runner up - Rs 1000</li><li>
2nd Runner up - Rs 500</li>
</ul>
  `;

  judging_criteria.innerHTML=`Theme Selection, Use of materials, originality, presentation, Grooming, Confidence, Attention details with accessories and costume, Overall Impact
  `;

  elegibility.innerHTML=`
This is a Team event. Only students of IISERs, NISER, CEBS and IISc can form teams (within respective institutes) and are allowed to participate.
 `;

  guidelines.innerHTML=`
        This is a Solo event. Only students of IISERs, NISER, CEBS and IISc are allowed to participate.
<br><br>Make apparel (clothing or outfit worn in a function) out of the materials which are normally thrown out as waste.
<br><br>Every entry must have a theme. The theme can be decided by the participant itself.
<br><br>Wear the dress/apparel yourself and record a video of around 30 seconds each which clearly shows the dress from all the directions (Front view, back view, right view, left view, etc)
<br><br>Submit 4 photographs one from each - front, back, right and left views.
<br><br>Backing track/music is allowed in the video file.
<br><br>Make a list of all the waste materials used in a .pdf format.
<br><br>Only 1 entry is allowed per participant
<br><br>Note that the video and photographs should not be edited in any way. Use of any kind of special effects is STRICTLY prohibited and will lead to direct disqualification
<br><br>Newspapers, magazines, paper bags, fabric strips, jute bags, gift wraps, etc are some examples of the waste materials which can be used
<br><br>Only the shape/size of the waste materials is allowed to change. Modifying any other physical attribute is not allowed (Example - Painting newspapers is not allowed. You are only allowed to change the shape/size of a newspaper).
<br><br>Only waste materials are to be used. You can’t use newly bought fresh materials
<br><br>Ready-made costumes are not allowed, but there is no restriction on improvising.
<br><br>No form of obscenity will be encouraged and it can lead to immediate disqualification.
  `;

  timeline.innerHTML =`
  Registration and Submission Begins: 8th March<br><br>
  Last day of Submission: 27th March, 11:59 PM
  `;

  sub_details.innerHTML=``;

  contact.innerHTML=`
Harshit Pal - 9974857459 <br><br>
<a href="https://www.instagram.com/i_m_hazlitt/">@i_m_hazlitt</a><br><br>
<a href="https://www.instagram.com/celebrations.at.iiserbpr/">@celebrations.at.iiserbpr</a>
  `;

  //show the popup

 document.getElementById('container').style.display='block';

};

function lazarus(){
  img2.src = `./img/events/lazarus.jpg`;

  img.src = `./img/events/lazarus.jpg`;

  $('#regbtn2').attr('href','https://forms.gle/bSsrSGeWr4FegW3r9');

  $('#regbtn').attr('href','https://forms.gle/bSsrSGeWr4FegW3r9');

  event_name.innerHTML=`LAZARUS`;

  subname.innerHTML=`<font class="gt">Online Musico-visual Competition</font>`;

  document.getElementById('extrabtn1').innerHTML=`
  <div class="st" style="text-align:center;">
    <a href="lazarus1.html" id="regbtn2"><button class="regbtn" type="button">Round-1 details</button></a> <br><br>
  </div>`;

  document.getElementById('extrabtn2').innerHTML=`
  <div class="lt" style="text-align:center;">
    <a href="lazarus1.html" id="regbtn2"><button class="regbtn" type="button">Round-1 details</button></a> <br><br>
  </div>`;

  about.innerHTML=`
  The Music Club of IISER Kolkata<a href="https://www.instagram.com/musicclubofiiserk/" style="color:blue;">(@musicclubofiiserk)</a> presents LAZARUS, an online music competition, unlike any other, in the history of time.
  <br><br>
  To put it straight, 𝗼𝗻𝗲 𝗵𝗮𝘀 𝘁𝗼 𝗶𝗻𝘁𝗲𝗿𝗽𝗿𝗲𝘁 𝗮 𝗳𝗲𝘄 𝘃𝗶𝘀𝘂𝗮𝗹 𝗮𝗿𝘁 𝗳𝗼𝗿𝗺𝘀 (𝗽𝗮𝗶𝗻𝘁𝗶𝗻𝗴𝘀/𝗴𝗿𝗮𝗵𝗶𝗰𝘀/𝗽𝗵𝗼𝘁𝗼𝗴𝗿𝗮𝗽𝗵𝘀) 𝗮𝗻𝗱 𝗲𝘅𝗽𝗿𝗲𝘀𝘀 𝘁𝗵𝗲𝗶𝗿 𝗶𝗻𝘁𝗲𝗿𝗽𝗿𝗲𝘁𝗮𝘁𝗶𝗼𝗻 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 𝗺𝘂𝘀𝗶𝗰𝗮𝗹 𝗽𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲𝘀 𝗼𝗳 𝘁𝗵𝗲𝗶𝗿 𝗼𝘄𝗻.
  <br><br>
  So grab your guitars and sitars and be ready for a musical adventure of a lifetime.
    `;

  event_details.innerHTML =`
  This is a ​solo online event.<br><br>
  It has two categories,​ vocal and instrumental​.<br><br>
  The event will be conducted in 3 rounds.<br><br>
  `;

  prizes.innerHTML=`
  Winner in each category :₹1000​,<br><br>
  Runner up in each category: ​₹500 <br><br>
  A ​special mention(s)<br><br>
  `;

  judging_criteria.innerHTML=`
         I) Overall Theme Correspondence and Overall Presentation

<br><br> II) Vocal will be judged based on:
        <ul>
          1. Pitching Quality
        <br><br> 2. Pronunciation
        <br><br> 3. Overall presentation.
        </ul>

<br><br> III) Instrumental will be judged by:
      <ul>
      1. Backing track (only if played by the participant)
      <br><br> 2. Rhythm and tempo
      <br><br> 3. Groove
      <br><br> 4. Melody line.
      <br><br> 5. Harmony line.
      <br><br> 6. Skill and technique.
      <br><br> 7. Overall presentation
      </ul>

  `;

  elegibility.innerHTML=`
  ONLY current students from IISERs, NISER, IISc, and CEBS are allowed to participate in this event. ​Alumni are not allowed​ to participate.
  <br><br>

  This is a solo online event. Only ​one entry per participant​ is allowed.
  <br><br>
  `;

  guidelines.innerHTML=`
  Participants should follow the timeline properly. Registration through the google form is a must. The submission-google forms will be sent to registered participants.<br><br>
  A participant can either participate in the vocal OR instrumental category.<br><br>
  The video entry should be a ​maximum of 7 minutes​ in length.<br><br>
  There are no genre restrictions.<br><br>
  Your entry should be your musical interpretation of the thematic image provided to you. Write a maximum of 4 lines in the google form how your music is related to the image.<br><br>
  At the beginning of your video entry, all participants should display your name, institution, and name of your song/songs for the first 5 seconds.<br><br>
  Name your video entries in the format, Name_Institute (Eg: Arikta_IISERK).<br><br>
  The participant’s face and visuals of them performing should be visible throughout the video.<br><br>
  Please note that No EDM Entries are Allowed.<br><br>
  Upload in google drive and give access to all so that we can download the video. Paste the drive link in the google form.<br><br>
  All the entries will be uploaded on social media by the Revival Core Committee, strictly subject to their convenience. By participating, you give consent to the Revival Core Committee for such use. In case of any issue, do contact your respective institute’s Revival Secretary.
  `;

  timeline.innerHTML =`
  5th March​ -  Registration opens, google form on this page.<br><br>
  6th March -  <ul>
                 <li>Registration closes.</li>
                 <li>First​ thematic image release​d. ​Google form for submission in the first round is circulated.</li>
                </ul>
  8th March​ - Submission for 1st round closes. <br><br>

  14th March -​ <ul>
    <li> Announcement of 1st round results​.</li>
    <li>2nd thematic image released.</li>
    <li>Google form for ​submission in the 2nd round is circulated.</li>
  </ul><br><br>
  16th March​ - Submission google form of 2nd Round closes. (Subject to change according to technicalities.)<br><br>
  1st April - <ul>
    <li>​ Announcement of 2nd round results​.</li>
    <li>3rd thematic image released.</li>
    <li>Final round submission opens.</li>
  </ul><br><br>
  3rd April​ - Submission google form of final round closes.<br><br>
  14th April -​Announcement of winners in the vocal and instrumental category.<br><br>
  `;

  sub_details.innerHTML=`Video entries must be submitted using the google form which will be circulated by mail/on the website. This will be clarified on/after Registration.`;

  contact.innerHTML=`
  Aayush Srivastav - 6266748990 @musicclubofiiserk<br><br>
  Soumi Bhattacharyya - 6291141950 @soumi_hiya<br><br>
  Sroyon Sengupta -  9748960044 @auditore_de_ssg<br><br>
  Shubhamay - 8918115319 @shubhmay8380<br><br>
  music.activity@iiserkol.ac.in<br><br>
  `;

  //show the popup

 document.getElementById('container').style.display='block';

}

function cicada(){
  img2.src = `./img/events/cicada.png`;

  img.src = `./img/events/cicada.png`;

  $('#regbtn2').attr('href','');

  $('#regbtn').attr('href','');

  event_name.innerHTML=`CICADA`;

  subname.innerHTML=`Treasure Hunt`;

  about.innerHTML=`Sick of solving your course and life problems? Enjoy the high of solving puzzles? <br><br>
Take a break and join us in the battle of wits against time in our very own CICADA 3301, an online puzzle game organised by IISER Bhopal. This is no simple feat for a lone wolf so don't forget to bring your buddies with you, making a team of maximum 3-4 members to sail you through the quest. <br><br>

The top three teams to make it to the end will be rewarded.


    `;

  event_details.innerHTML =`

  `;

  prizes.innerHTML=`
  `;

  judging_criteria.innerHTML=`

  `;

  elegibility.innerHTML=`

Team size Maximum limit 4

  `;

  guidelines.innerHTML=`

  `;

  timeline.innerHTML =`

  `;

  sub_details.innerHTML=``;

  contact.innerHTML=`Sarthak - +91 7077965840  @sathak.g_art <br><br>
Harshwardhan - +91 6263163831 <br><br>

@falc_iiserb <br><br>

@iiserb.cultural <br><br>


  `;

  //show the popup

 document.getElementById('container').style.display='block';

};

function poetry_slam(){
  img2.src = `./img/events/poetry_slam.jpg`;

  img.src = `./img/events/poetry_slam.jpg`;

  $('#regbtn2').attr('href','');

  $('#regbtn').attr('');

  event_name.innerHTML=`POETRY SLAM`;

  subname.innerHTML=`𝐎𝐧𝐥𝐢𝐧𝐞 𝐏𝐨𝐞𝐭𝐫𝐲 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧`;

  about.innerHTML=`
  “Poetry is when an emotion has found its thought and the thought has found words”
-𝗥𝗼𝗯𝗲𝗿𝘁 𝗙𝗿𝗼𝘀𝘁
<br><br>
This event is all about articulating your innermost thoughts and sentiments by channeling them eloquently through the poetic artform.
<br><br>
The participants will essentially be asked to recite poems of their own composition which will be judged by our panel. This enjoyable event is for both seasoned poets as well as amateurs just looking to have a good time. In that spirit, we eagerly await your entries to see who puts the best words in the best order and becomes the Poetry Grand Slam winner!

    `;

  event_details.innerHTML =`


  `;

  prizes.innerHTML=`
  `;

  judging_criteria.innerHTML=`
  Poems will be judged based on factors like rhyming schemes, presentation, clarity of structure and understandability.
  `;

  elegibility.innerHTML=`

  `;

  guidelines.innerHTML=`
  Solo event - 1
  <br><br>
  1. Each poem must be of the poet’s own creation.
<br><br>
2. Memorization is not required or necessary. The poet may choose to read off a sheet of paper or notebook or read off of their phone(s).
<br><br>
3. Each poet gets three minutes (plus a ten-second grace period) to read one poem. If the poet goes over time, points will be deducted from the total score by the scorekeeper. The
poem/performance will lose .5 (point 5) off of their score for each 10 seconds they go over.
<br><br>
4. The poet may NOT use props, costumes, pre-recorded/taped music, or musical instruments while performing. It’s just you and your poem on stage. BUT you are allowed to sing or beat box or make any other sounds with your body in your performance.
<br><br>
5. There is NO restriction on language used in the poem. Any language, even multiple languages, may be used. However, each poet must provide translations for every non-English word used in the poem. If the entire poem is in a language other than
English, then a full translation (effective translation, not a word-by-word translation necessarily) must be provided.
<br><br>
6. The time required to read/narrate the translation will NOT be counted in the 3 mins that are allotted to every participant. Extra 3 mins will be given (without penalty) if the poet has to offer a translation.
<br><br>
7. The poem may NOT include sexist, racist, homophobic, or transphobic comments. However anger, upset and frustration are totally legit emotions to express in your poem, just be creative in how you go about doing it.
<br><br>
8. The poet receives scores out of 10 from each judge.
<br><br>
9. Registration forms will be sent out and the participants must register before the event. NO unregistered participation request will be entertained on the day of the event itself.
<br><br>

  `;

  timeline.innerHTML =`

  `;

  sub_details.innerHTML=``;

  contact.innerHTML=`
  Budhaditya : 8178551569
<br><br>
  budhaditya@iisc.ac.in
  `;

  //show the popup

 document.getElementById('container').style.display='block';

}

function pandemonium(){
  img2.src = `./img/events/pandemonium.jpg`;

  img.src = `./img/events/pandemonium.jpg`;

  $('#regbtn2').attr('href','https://forms.gle/Xbs6QGNSeUxn9g5RA');

  $('#regbtn').attr('href','https://forms.gle/Xbs6QGNSeUxn9g5RA');

  event_name.innerHTML=`PANDEMONIUM`;

  subname.innerHTML=`Solo Dance Competition`;

  about.innerHTML=`
Do you miss tapping your feet to the rhythm of the dance floor? Don’t worry, ‘cause we have got you covered! Sway to the music and compete against the best in this exhilarating dance battle. Express your emotions through your moves and let yourself loose, as all pandemonium breaks loose in this electrifying contest!

    `;

  event_details.innerHTML =`

  `;

  prizes.innerHTML=`
  `;

  judging_criteria.innerHTML=`

Judgement will be done by professionals in the field. <br><br>
Judgement will be done on the basis of originality, creativity, music sense, difficulty level of the performance and costume creativity.

  `;

  elegibility.innerHTML=` Only current Students from participating intitutes are allowed.

  `;

  guidelines.innerHTML=`There is no restriction on the dance style, theme, music and costume, it can be chosen according to the participants own freedom. <br><br>
Only one entry per person will be accepted. <br><br>
Record your video in a still frame, camera shouldn’t be moving. <br><br>
The video should not be edited and completed in a single shot. <br><br>
The video should not be longer than 2 minutes.


  `;

  timeline.innerHTML =`
Timeline: <br><br>
March 8th: Google form Registrations open. <br><br>
March 25th: Google form registrations close <br><br>
April 2nd: Result Declaration.
  `;

  sub_details.innerHTML=`
  To participate in the competition, contestants must register via google form. Link to which is attached with the mail. The guidelines for filling the google forms are given below. <br><br>

  Use your institute e-mail IDs only to fill this form. Entries from Multiple or non-institution email IDs will not be accepted. <br><br>
The video file should not be more than 500 mb in size. <br><br>
The video should be in MP4 format specifically. <br><br>
Please use the nomenclature. Name_Institution code (e.g., Naman Mishra_10). Please find the institution code at the end of this rulebook.

Institute codes: S. No. is the code. <br><br>
<ol>
<li>
Indian Institute of Science Education and Research, Kolkata </li><li>
Indian Institute of Science Education and Research, Tirupati </li><li>
Indian Institute of Science Education and Research, Bhopal </li><li>
Indian Institute of Science Education and Research, Pune </li><li>
Indian Institute of Science Education and Research, Berhampur </li><li>
Indian Institute of Science Education and Research, Mohali </li><li>
Indian Institute of Science Education and Research, Thiruvananthapuram </li><li>
National Institute of Science Education and Research, Bhubaneshwar </li><li>
Indian Institution of Science, Bangalore </li><li>
Centre for Excellence in Basic Sciences, Mumbai</li>
</ol>

  `;

  contact.innerHTML=`

Contact information:
Naman Mishra {naman.mishra@cbs.ac.in} <br><br>
Tanveer Tadavi {tanveer.tadavi@cbs.ac.in}

  `;

  //show the popup

 document.getElementById('container').style.display='block';

}

function capture_it(){
  img2.src = `./img/events/capture_it.jpg`;

  img.src = `./img/events/capture_it.jpg`;

  $('#regbtn2').attr('href','');

  $('#regbtn').attr('href','');

  event_name.innerHTML=`CAPTURE IT!`;

  subname.innerHTML=`An Online Photography competition`;

  about.innerHTML=`
An online photography competition without any thematic restrictions is the perfect platform to express yourself with your pictures, woven together to tell your story. While life may have come to a standstill this year, we still have memories encased in our camera reels. So get ready to share your best clicks in this enthralling competition!

    `;

  event_details.innerHTML =`
This is a solo event, each participant can send only 1 photo. <br><br>
The link for submissions will be put on the Revival website & Lumière Instagram page (@lumiere.iiserm) . <br><br>
The judgement of the event will be delivered by 30/03/2021 on @lumiere.iiserm (instagram).


  `;

  prizes.innerHTML=` There will be 3 prizes of ₹1500, ₹1000, ₹500.
  `;

  judging_criteria.innerHTML=`
  <!-- All the entries received on 14/03/2021 will be posted on our Instagram page (@lumiere.iiserm) on 15/03/2021. This process will continue till last date (last date of submission 27/03/2021). <br><br>
Points will be calculated for each post according to this rule :- 1 point for 1 “like” & 2 points for 1 “comment”. <br><br>
Only 1 comment will be counted from 1 person (please do not spam). <br><br>
 Points will be calculated 24 hours after the post is published. <br><br>
Winners will be declared on the basis of highest points (calculated after 24 hours respectively). -->
  `;

  elegibility.innerHTML=`
The participating individual should be a currently enrolled student of the participating institutes. <br><br>
This is a solo event and will operate on basis of submissions. <br><br>

  `;

  guidelines.innerHTML=`

This is a solo event, each participant can send only 1 photo. <br><br>
Photo should be in JPG/JPEG format. <br><br>
The participant is expected to send us the photo between 14/03/2021 & 27/03/2021. <br><br>
Only entries from Google form will be considered. <br><br>
You are supposed to provide us a Google drive link to your photo from where we can download it. <br><br>
Due to Google’s policies, you will need to provide access when requested. (Just sharing the link is not enough.) <br><br>


  `;

  timeline.innerHTML =`
<br><br>  We shall provide the necessary link for submission for the event by 13/03/2021.
<br><br>The registration opens on 14/03/2021, kindly fill the form by 27/03/2021. All participants are required to fill the form within the deadline and all further communications will be done through the mail/contact provided in the form.
<br><br>The link for submissions will be put on the Revival website & Lumière Instagram page (@lumiere.iiserm) .
<br><br>The judgement of the event will be delivered by 30/03/2021 on @lumiere.iiserm (instagram).

  `;

  sub_details.innerHTML=`We shall provide the necessary link for submission for the event by 13/03/2021. <br><br>
The registration opens on 14/03/2021, kindly fill the form by 27/03/2021. All participants are required to fill the form within the deadline and all further communications will be done through the mail/contact provided in the form.<br><br>
`;

  contact.innerHTML=`Contact us :- Shounak Hinge, convener, Lumière <br><br>
9145496175 <br><br>
29shounak.hinge@gmail.com <br><br>
@shounak_hinge


  `;

  //show the popup

 document.getElementById('container').style.display='block';

}

function mela_quiz(){
  img2.src = `./img/events/mela_quiz.jpg`;

  img.src = `./img/events/mela_quiz.jpg`;

  $('#regbtn2').attr('href','');

  $('#regbtn').attr('href','');

  event_name.innerHTML=`MELA QUIZ`;

  subname.innerHTML=`Online quiz based on music, entertainment, literature and arts.`;

  about.innerHTML=`
Do you know a lot about the latest trendy songs, stay updated about the newest Bollywood movies and the best books? Well, IISER Thiruvananthapuram is here with the perfect opportunity to put this trivia knowledge to good use - the MELA Quiz! The quiz will be focused on music, entertainment, literature and arts. An amazing platform to showcase your fine arts knowledge!
Getting down to the nitty-gritty, the competition will take place  in two sessions (a prelim and the final),  through Discord. Teams of two can participate. Stay tuned for further updates!

    `;

  event_details.innerHTML =`

  `;

  prizes.innerHTML=`
  `;

  judging_criteria.innerHTML=`

  `;

  elegibility.innerHTML=`
Team size: 2
  `;

  guidelines.innerHTML=`

  `;

  timeline.innerHTML =`

  `;

  sub_details.innerHTML=``;

  contact.innerHTML=`
Contact information: <br><br>

Tony Nixon Mavely - 8281517015 <br><br>
 tonynixonmavely17@iisertvm.ac.in <br><br>
culturalclub@iisertvm.ac.in

  `;

  //show the popup

 document.getElementById('container').style.display='block';

}
