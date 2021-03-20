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

  subname.innerHTML=`Online Photography and Drawing Comics Event`;

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
<ol type="A">
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

   $('#regbtn2').attr('href','https://forms.gle/rnkYZ13xt8BN5PGn8');

   $('#regbtn').attr('href','https://forms.gle/rnkYZ13xt8BN5PGn8');

  document.getElementById('lz1').style.display=`none`;
  document.getElementById('lz2').style.display=`none`;

  // document.getElementById('extrabtn1').innerHTML=`
  //<div class="st" style="text-align:center;">
  //  <a><button class="regbtn" type="button" style="background-color:red;" >Closed</button></a> <br><br>
  //</div>`;

//  document.getElementById('extrabtn2').innerHTML=`
  //<div class="lt" style="text-align:center;">
    //<a><button class="regbtn" type="button" style="background-color:red;" >Closed</button></a> <br><br>
  //</div>`;

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

  prizes.innerHTML=`
<ul style="list-style-type:disc;">
<li>1st Prize: 3000 INR </li><li>
Runner’s Up: 1500 INR</li>
</ul>

  `;

  judging_criteria.innerHTML=`
<ul style="list-style-type:disc;">
<li>Facial expressions, body language, dialogue delivery by actors and theme, plot development, character utilisation of the script will be prime considerations for judgement.</li><li>
There will be negative marking if the upper cap of the video limit is exceeded.</li><li>
Finer video editing would gain extra points. </li>
</ul>
  `;

  elegibility.innerHTML=`
The participating group should be currently enrolled students of the participating institutes-IISERS, NISER, IISc and CEBS. Alumnus not allowed to participate.

  `;

  guidelines.innerHTML=`
<ol>
<li>This is a group event and will operate on basis of video submissions.</li><li>
    Each group would be given 4 random characters and they need to evolve a plot to present all four characters in a single play.</li><li>
    A team can choose extra two characters of their choice to assist their plot. So a maximum of 6 students can participate.</li><li>
All participants are required to fill the form within the deadline and all further communications will be done through the mail/contact provided in the form.</li><li>

The video should be maximum of 15 mins in landscape mode. The videos can be shot individually (keeping in mind that people may be at home, not on campus) with one person per frame which should be then compiled into a single video play.</li><li>
The play can be in any language but English subtitles are mandatory.</li><li>
The script should be uploaded with a video file in English language only.</li><li>
Please avoid abusive or derogatory speech.</li>
</ol>

The participants are expected to send us a video file of their act via specified mode (to be communicated) latest by 28th March 2021, 11:59pm. The file should have your group's name.<br><br>

Please do not mention the names of the participants in the video itself for fair judgment.<br><br>

Entries may be uploaded on social media by the Revival Core Committee, strictly subject to their convenience. By participating, you give consent to the Revival Core Committee for such use. In case of any issue, do contact your respective institute’s Revival Secretary.

  `;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
<li>Registration opens on 7th march 2021.</li><li>
Registration form should be filled latest by 13th March 2021, 11:59pm.</li><li>
Deadline for submission of the video of the play will be 28th March 2021, 11:59pm.</li><li>
Result of the judgement will be made available by Revival Closure.</li>
</ul>


  `;

  sub_details.innerHTML=`Further instructions, mode of submission and character assignments will be sent out to the participants within 48 hours of their registration.`;

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

  subname.innerHTML=`Online Fashion Event`;

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

  judging_criteria.innerHTML=`
<ul style="list-style-type:disc;">
<li> Theme Selection </li><li>
Use of materials</li><li>
originality</li><li>
presentation</li><li>
Grooming</li><li>
Confidence</li><li>
Attention details with accessories and costume</li><li>
Overall Impact</li>
</ul>
  `;

  elegibility.innerHTML=`
Only students of IISERs, NISER, CEBS and IISc are allowed to participate. Alumni are not allowed to participate.
 `;

  guidelines.innerHTML=`
<ol>
<li>This is a Solo event.</li><li>
Make apparel (clothing or outfit worn in a function) out of the materials which are normally thrown out as waste.</li><li>
Participants have to make a video of a small Ramp walk followed by your introduction and explaining your outfit in short</li><li>
Rename your videos/photos as "name@trashion" before uploading</li><li>
Every entry must have a theme. The theme can be decided by the participant itself.</li><li>
Wear the dress/apparel yourself and record a video of around 30 seconds each which clearly shows the dress from all the directions (Front view, back view, right view, left view, etc)</li><li>
Submit 4 photographs one from each - front, back, right and left views.</li><li>
Backing track/music is allowed in the video file.</li><li>
Make a list of all the waste materials used in a .pdf format.</li><li>
Only 1 entry is allowed per participant</li><li>
Note that the video and photographs should not be edited in any way. Use of any kind of special effects is STRICTLY prohibited and will lead to direct disqualification.</li><li>
Newspapers, magazines, paper bags, fabric strips, jute bags, gift wraps, etc are some examples of the waste materials which can be used.</li><li>
Only the shape/size of the waste materials is allowed to change. Modifying any other physical attribute is not allowed (Example - Painting newspapers is not allowed. You are only allowed to change the shape/size of a newspaper).</li><li>
Only waste materials are to be used. You can’t use newly bought fresh materials.</li><li>
Ready-made costumes are not allowed, but there is no restriction on improvising.</li><li>
No form of obscenity will be encouraged and it can lead to immediate disqualification.</li>
</ol>

All the entries will be uploaded on social media by the Revival Core Committee, strictly subject to their convenience.<br>
By participating, you give consent to the Revival Core Committee for such use.<br>
In case of any issue, do contact your respective institute’s Revival Secretary.


`;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
<li>  Registration and Submission Begins: 8th March</li><li>
  Last day of Submission: 27th March, 11:59 PM</li>
</ul>
  `;

  sub_details.innerHTML=``;

  contact.innerHTML=`
<ul style="list-style-type:disc;">
<li>Harshit Pal - 9974857459
<a href="https://www.instagram.com/i_m_hazlitt/" style="color:blue;">@i_m_hazlitt</a></li><li>
<a href="https://www.instagram.com/celebrations.at.iiserbpr/" style="color:blue;">@celebrations.at.iiserbpr</a></li>
<ul>
  `;

  //show the popup

 document.getElementById('container').style.display='block';

};

function lazarus(){
  img2.src = `./img/events/lazarus.jpg`;

  img.src = `./img/events/lazarus.jpg`;
  //
  // $('#regbtn2').attr('href','https://forms.gle/bSsrSGeWr4FegW3r9');
  //
  // $('#regbtn').attr('href','https://forms.gle/bSsrSGeWr4FegW3r9');

  event_name.innerHTML=`LAZARUS`;

  subname.innerHTML=`<font class="gt">Online Musico-visual Competition</font>`;

  document.getElementById('lz1').style.display=`none`;

  document.getElementById('lz2').style.display=`none`;


  document.getElementById('extrabtn3').innerHTML=`
  <div class="st" style="text-align:center;">
    <a href="lazarus2.html"><button class="regbtn" type="button">Round-2 details</button></a> <br><br>
  </div>`;

  document.getElementById('extrabtn4').innerHTML=`
  <div class="lt" style="text-align:center;">
    <a href="lazarus2.html"><button class="regbtn" type="button">Round-2 details</button></a> <br><br>
  </div>`;

  document.getElementById('extrabtn1').innerHTML=`
  <div class="st" style="text-align:center;">
    <a><button onclick="laz_results()" class="regbtn flash" type="button" style="" >Round-1 Results</button></a> <br><br>
  </div>`;

  document.getElementById('extrabtn2').innerHTML=`
  <div class="lt" style="text-align:center;">
    <a><button onclick="laz_results()" class="regbtn flash" type="button" style="" >Round-1 Results</button></a> <br><br>
  </div>`;

  about.innerHTML=`
  <a href="https://www.instagram.com/musicclubofiiserk/" style="color:blue;">The Music Club of IISER Kolkata</a> presents LAZARUS, an online music competition, unlike any other, in the history of time.
  <br><br>
  To put it straight, 𝗼𝗻𝗲 𝗵𝗮𝘀 𝘁𝗼 𝗶𝗻𝘁𝗲𝗿𝗽𝗿𝗲𝘁 𝗮 𝗳𝗲𝘄 𝘃𝗶𝘀𝘂𝗮𝗹 𝗮𝗿𝘁 𝗳𝗼𝗿𝗺𝘀 (𝗽𝗮𝗶𝗻𝘁𝗶𝗻𝗴𝘀/𝗴𝗿𝗮p𝗵𝗶𝗰𝘀/𝗽𝗵𝗼𝘁𝗼𝗴𝗿𝗮𝗽𝗵𝘀) 𝗮𝗻𝗱 𝗲𝘅𝗽𝗿𝗲𝘀𝘀 𝘁𝗵𝗲𝗶𝗿 𝗶𝗻𝘁𝗲𝗿𝗽𝗿𝗲𝘁𝗮𝘁𝗶𝗼𝗻 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 𝗺𝘂𝘀𝗶𝗰𝗮𝗹 𝗽𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲𝘀 𝗼𝗳 𝘁𝗵𝗲𝗶𝗿 𝗼𝘄𝗻.
  <br><br>
  So grab your guitars and sitars and be ready for a musical adventure of a lifetime.
    `;

  event_details.innerHTML =`

  `;

  prizes.innerHTML=`
<ul style="list-style-type:disc;">
<li>  Winner in each category :₹1000​,</li><li>
  Runner up in each category: ​₹500 <br>
  A ​special mention(s)</li>
</ul>
  `;

  judging_criteria.innerHTML=`
<ol type="I">
         <li> Overall Theme Correspondence and Overall Presentation</li>

<li> Vocal will be judged based on:
        <ol>
          <li> Pitching Quality</li><li>
         Pronunciation</li><li>
         Overall presentation.</li>
        </ol>
</li>
<li> Instrumental will be judged by:
      <ol>
      <li> Backing track (only if played by the participant) </li><li>
       Rhythm and tempo</li><li>
       Groove</li><li>
       Melody line.</li><li>
       Harmony line.</li><li>
       Skill and technique.</li><li>
       Overall presentation</li>
      </ol>
</li></ol>
  `;

  elegibility.innerHTML=`
<ul>
<li>ONLY current students from IISERs, NISER, IISc, and CEBS are allowed to participate in this event. ​Alumni are not allowed​ to participate.
  </li><li>

  This is a solo online event. Only ​one entry per participant​ is allowed.
  </li>
</ul>
  `;

  guidelines.innerHTML=`
<ol>
<li>  The Event has two categories,​ vocal and instrumental​.</li><li>
  The event will be conducted in 3 rounds.</li><li>
  Participants should follow the timeline properly. Registration through the google form is a must. The submission-portals for all the rounds will be updated in the website.</li><li>
  A participant can either participate in the vocal OR instrumental category.</li><li>
  The video entry should be a ​maximum of 7 minutes​ in length.</li><li>
  There are no genre restrictions.</li><li>
  Your entry should be your musical interpretation of the thematic image provided to you. Write a maximum of 4 lines in the google form how your music is related to the image.</li><li>
  At the beginning of your video entry, all participants should display your name, institution, and name of your song/songs for the first 5 seconds.</li><li>
  Name your video entries in the format, Name_Institute (Eg: Arikta_IISERK).</li><li>
  The participant’s face and visuals of them performing should be visible throughout the video.</li><li>
  Please note that No EDM Entries are Allowed.</li><li>
  Upload in google drive and give access to all so that we can download the video. Paste the drive link in the google form.</li>
</ol><br>
  All the entries will be uploaded on social media by the Revival Core Committee, strictly subject to their convenience. By participating, you give consent to the Revival Core Committee for such use. In case of any issue, do contact your respective institute’s Revival Secretary.
  `;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
 <li> 5th March​ -  Registration opens, google form on this page.</li><li>
  6th March -  <ul>
                 <li>Registration closes.</li>
                 <li>First thematic image released. Google form for submission in the first round is circulated.</li>
                </ul></li><li>
  8th March​ - Submission for 1st round closes. </li><li>

  14th March -​ <ul>
    <li> Announcement of 1st round results​.</li>
    <li>2nd thematic image released.</li>
    <li>Google form for submission in the 2nd round is circulated.</li>
  </ul></li><li>
  16th March - Submission google form of 2nd Round closes. (Subject to change according to technicalities.)</li><li>
  1st April - <ul>
    <li>​ Announcement of 2nd round results​.</li>
    <li>3rd thematic image released.</li>
    <li>Final round submission opens.</li>
  </ul></li><li>
  3rd April​ - Submission google form of final round closes.</li><li>
  10th April -​Announcement of winners in the vocal and instrumental category.</li>
</ul>
  `;

  sub_details.innerHTML=`

  <ul style="list-style-type:disc;">
  <li> <font style="color:red;"> Registrations for Lazarus is closed now!</font> </li>
  <li> <a style="color:blue;" href="./lazarus1.html"> Round-1 Submission Guidelines </a> </li>
  <li> <a style="color:blue;" href="./lazarus2.html"> Round-2 Submission Guidelines </a> </li>
</ul>
  `;

  contact.innerHTML=`
<ul style="list-style-type:disc;">
<li>  Aayush Srivastav - 6266748990 <a href="https://www.instagram.com/musicclubofiiserk/" style="color:blue;">@musicclubofiiserk</a></li><li>
  Soumi Bhattacharyya - 6291141950 <a href="https://www.instagram.com/soumi_hiya/" style="color:blue;">@soumi_hiya</a></li><li>
  Sroyon Sengupta -  9748960044 <a href="https://www.instagram.com/auditore_de_ssg/" style="color:blue;">@auditore_de_ssg</a></li><li>
  Shubhamay - 8918115319 <a href="https://www.instagram.com/shubhmay8380/" style="color:blue;">@shubhmay8380</a></li><li>
  music.activity@iiserkol.ac.in</li>
</ul>
  `;

  //show the popup

 document.getElementById('container').style.display='block';

}

function cicada(){
  img2.src = `./img/events/cicada.png`;

  img.src = `./img/events/cicada.png`;

  // $('#regbtn2').attr('href','');

  // $('#regbtn').attr('href','');

  document.getElementById('lz1').style.display=`none`;
  document.getElementById('lz2').style.display=`none`;

  document.getElementById('extrabtn1').innerHTML=`
  <div class="st" style="text-align:center;">
  <!-- href="https://students.iiserb.ac.in/cicada'21/ -->
    <a><button class="regbtn flash" type="button" style="" >Coming soon</button></a> <br><br>
  </div>`;

  document.getElementById('extrabtn2').innerHTML=`
  <div class="lt" style="text-align:center;">
    <a><button class="regbtn flash" type="button" style="" >Coming soon</button></a> <br><br>
  </div>`;

  event_name.innerHTML=`CICADA`;

  subname.innerHTML=`Treasure Hunt`;

  about.innerHTML=`Sick of solving your course and life problems? Enjoy the high of solving puzzles? <br><br>
Take a break and join us in the battle of wits against time in our very own CICADA 3301, an online puzzle game organised by IISER Bhopal. This is no simple feat for a lone wolf so don't forget to bring your buddies with you, making a team of maximum 3-4 members to sail you through the quest. <br><br>

The top three teams to make it to the end will be rewarded.


    `;

  event_details.innerHTML =`

  `;

  prizes.innerHTML=`
IISER Bhopal’s Organising Team will update soon.
  `;

  judging_criteria.innerHTML=`
  N.A.
  `;

  elegibility.innerHTML=`

<ul>
<li>ONLY current students from IISERs, NISER, IISc, and CEBS are allowed to participate in this event. ​Alumni are not allowed​ to participate.
  </li><li>
  Team size Maximum limit 4
  </li>
</ul>
  `;

  guidelines.innerHTML=`
  <ol>
<li> Actively look out for whatever information you can acquire and use them in the best possible way you know.</li><li>
 In-game hints are provided whenever necessary.</li><li>
 This online game is totally based upon PC Browser, preferably Chrome. However occasional
use of mobile phone can not be ruled out completely.</li><li>
 You don’t require prior knowledge of programming to play this game. Although it is expected
that at least you know how to browse through the internet, use browsing tools and links.</li><li>
 Use lowercase alphabets and no spacing in between unless prompted otherwise.</li><li>
 Use your own email address to register and at the time of submission. Further communication
regarding winners will be addressed through this mail.</li>
</ol>
  `;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
<li>28th March 2021 &minus; Registartion Opens</li><li>
30th March 2021 &minus; Registration Closes</li><li>
30th March 2021 &minus; Event starts</li><li>
4th April 2021 &minus; Event ends</li>
</ul>
  `;

  sub_details.innerHTML=`NA..`;

  contact.innerHTML=`
<ul style="list-style-type:disc;">
<li>
Sarthak - +91 7077965840  <a href="https://www.instagram.com/_nusart_/" style="color:blue;">@_nusart_</a> </li><li>
Yashovardhan - +91 6263163831 <a href="https://www.instagram.com/yashovardhanjha/" style="color:blue;">@yashovardhanjha</a></li><li>

<a href="https://www.instagram.com/falc_iiserb/" style="color:blue;">@falc_iiserb</a> </li><li>

<a href="https://www.instagram.com/iiserb.cultural/" style="color:blue;">@iiserb.cultural</a> </li>
</ul>
  `;

  //show the popup

 document.getElementById('container').style.display='block';

};

function poetry_slam(){
  img2.src = `./img/events/poetry_slam.jpg`;

  img.src = `./img/events/poetry_slam.jpg`;

  $('#regbtn2').attr('href','https://docs.google.com/forms/d/e/1FAIpQLSdVuSQCh1xKNfIc0pY8-FpCoDPVTKYwZNGxpfiGGCqwPZ4JxA/viewform?usp=sf_link');

  $('#regbtn').attr('href','https://docs.google.com/forms/d/e/1FAIpQLSdVuSQCh1xKNfIc0pY8-FpCoDPVTKYwZNGxpfiGGCqwPZ4JxA/viewform?usp=sf_link');

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
<ol>
<li> ONLY current students from IISERs, NISER, IISc, and CEBS are allowed to participate in this event. ​Alumni are not allowed​ to participate.
</li><li> This is a solo online event. Only ​one entry per participant​ is allowed.
</li>
</ol>
`;

  guidelines.innerHTML=`
For Prelims:
<ol>
<li> Each poem must be of the poet’s own creation.</li><li>

There is NO restriction on language used in the poem. Any language, even multiple languages, may be used. However, each poet must provide translations for every non-English word used in the poem. If the entire poem is in a language other than
English, then a full translation (effective translation, not a word-by-word translation necessarily) must be provided.</li><li>
 The poem may NOT include sexist, racist, homophobic, or transphobic comments. However, anger, upset and frustration are totally legit emotions to express in your poem, just be creative in how you go about doing it.</li><li>
 The poet receives scores out of 10 from each judge.</li><li>
 Registration forms will be sent out and the participants must register before the event. NO unregistered participation request will be entertained on the day of the event itself.</li>
</ol>

For Finals:
  <ol>
  <li> Each poem must be of the poet’s own creation.</li><li>
 Memorization is not required or necessary. The poet may choose to read off a sheet of paper or notebook or read off of their phone(s).
</li><li>
 Each poet gets three minutes (plus a ten-second grace period) to read one poem. If the poet goes over time, points will be deducted from the total score by the scorekeeper. The
poem/performance will lose .5 (point 5) off of their score for each 10 seconds they go over.
</li><li>
 The poet may NOT use props, costumes, pre-recorded/taped music, or musical instruments while performing. It’s just you and your poem on stage. BUT you are allowed to sing or beat box or make any other sounds with your body in your performance.
</li><li>
 There is NO restriction on language used in the poem. Any language, even multiple languages, may be used. However, each poet must provide translations for every non-English word used in the poem. If the entire poem is in a language other than
English, then a full translation (effective translation, not a word-by-word translation necessarily) must be provided.
</li><li>
 The time required to read/narrate the translation will NOT be counted in the 3 mins that are allotted to every participant. Extra 3 mins will be given (without penalty) if the poet has to offer a translation.
</li><li>
 The poem may NOT include sexist, racist, homophobic, or transphobic comments. However anger, upset and frustration are totally legit emotions to express in your poem, just be creative in how you go about doing it.
</li><li>
 The poet receives scores out of 10 from each judge.
</li><li>
 Registration forms will be sent out and the participants must register before the event. NO unregistered participation request will be entertained on the day of the event itself.
</li>
</ol>

  `;

  timeline.innerHTML =`
Prelims:
<ul style="list-style-type:disc;">
<li>Registration cum submission Starts on 14th March 2021</li>
<li>Registration cum submission ends on 24th March 2021</li>
</ul>
Finals:
<ul style="list-style-type:disc;">
<li>Finals would be on 4th April 2021 live. Link would be shared soon.
</li></ul>


  `;

  sub_details.innerHTML=`

Prelims (Submission based)–
<ul style="list-style-type:disc;">
<li>Registration cum submission Starts on 14th March 2021</li>
<li>Registration cum submission ends on 22th March 2021</li>
</ul>

<br><br>
Submission link -
<a href="https://docs.google.com/forms/d/e/1FAIpQLSdVuSQCh1xKNfIc0pY8-FpCoDPVTKYwZNGxpfiGGCqwPZ4JxA/viewform?usp=sf_link" style="color:blue;">Click to Submit</a>
<br><br>
Finals (Live Event) – 4th April 2021
<br>
Meeting link would be shared soon.
`;

  contact.innerHTML=`
  Budhaditya : 8178551569
<br>
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
<ul style="list-style-type:disc;">
<li> 1st Prize &minus; Rs. 2000 </li>
<li> 2nd Prize &minus; Rs. 1000 </li>
</ul>
  `;

  judging_criteria.innerHTML=`

Judgement will be done by professionals in the field. <br><br>
Judgement will be done on the basis of originality, creativity, music sense, difficulty level of the performance and costume creativity.

  `;

  elegibility.innerHTML=`
<ol>
<li>  ONLY current students from IISERs, NISER, IISc, and CEBS are allowed to participate in this event. ​Alumni are not allowed​ to participate.
</li><li> This is a Solo Event.</li>
</ol>

  `;

  guidelines.innerHTML=`There is no restriction on the dance style, theme, music and costume, it can be chosen according to the participants own freedom. <br><br>
<ol>
<li>Only one entry per person will be accepted. </li><li>
Record your video in a still frame, camera shouldn’t be moving. </li><li>
The video should not be edited and completed in a single shot. </li><li>
The video should not be longer than 2 minutes.</li>
</ol>
<br><br>
 To participate in the competition, contestants must register via google form. Link to which is attached with the mail. The guidelines for filling the google forms are given below.

<ol>
<li>Use your institute e-mail IDs only to fill this form. Entries from Multiple or non-institution email IDs will not be accepted. </li><li>
The video file should not be more than 500 mb in size. </li><li>
The video should be in MP4 format specifically. </li><li>
Please use the nomenclature. Name_Institution code (e.g., Naman Mishra_10). Please find the institution code at the end of this rulebook.</li>
</ol>
<br><br>
Institute codes: S. No. is the code.
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
<br><br>
Entries may be uploaded on social media by the Revival Core Committee, strictly subject to their convenience. By participating, you give consent to the Revival Core Committee for such use. In case of any issue, do contact your respective institute’s Revival Secretary.


  `;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
<li>March 8th: Google form Registrations open. </li><li>
March 25th: Google form registrations close </li><li>
April 4th: Result Declaration.</li>
</ul>
  `;

  sub_details.innerHTML=`
  Registration Link: <a href="https://forms.gle/Xbs6QGNSeUxn9g5RA" style="color:blue;">https://forms.gle/Xbs6QGNSeUxn9g5RA</a>

  `;

  contact.innerHTML=`
<ul style="list-style-type:disc;">
<li>Naman Mishra {naman.mishra@cbs.ac.in} </li><li>
Tanveer Tadavi {tanveer.tadavi@cbs.ac.in}</li>
</ul>

  `;

  //show the popup

 document.getElementById('container').style.display='block';

}

function capture_it(){
  img2.src = `./img/events/capture_it.jpg`;

  img.src = `./img/events/capture_it.jpg`;

  $('#regbtn2').attr('href','https://forms.gle/9FT36eTkkUgYvJCQA');

  $('#regbtn').attr('href','https://forms.gle/9FT36eTkkUgYvJCQA');

  event_name.innerHTML=`CAPTURE IT!`;

  subname.innerHTML=`An Online Photography competition`;

  about.innerHTML=`

An online photography competition without any thematic restrictions is the perfect platform to express yourself with your pictures.
While life may have come to a standstill this year, we still have memories encased in our camera reels.
So get ready to share your best clicks in this enthralling competition!



    `;

  event_details.innerHTML =`
This is a solo event, each participant can send only 1 photo. <br><br>
The link for submissions will be put on the Revival website & Lumière Instagram page (@lumiere.iiserm) . <br><br>
The judgement of the event will be delivered by 30/03/2021 on @lumiere.iiserm (instagram).


  `;

  prizes.innerHTML=` There will be 3 prizes of ₹1500, ₹1000, ₹500.
  `;

  judging_criteria.innerHTML=`
<ol>
<li>   Abhishek Howlader will be the judge of this competition. (<a href="https://abhihowlader.wixsite.com/abhishekhowalder" style="color:blue;">https://abhihowlader.wixsite.com/abhishekhowalder</a>)</li><li>
Although there is no theme set for the competition, each photo needs to be submitted with the theme photographer intends to be judged on.</li><li>
Caption is highly recommended.</li><li>
Decision by the judge will be final.</li>
</ol>
  `;

  elegibility.innerHTML=`
<ul style="list-style-type:disc;">
<li>The participating individual should be a currently enrolled student of the participating institutes. </li><li>
This is a solo event and will operate on the basis of submissions. </li>
</ul>

  `;

  guidelines.innerHTML=`
<ol>
<li>This is a solo event, each participant can send only 1 photo. </li><li>
Photos should be in JPG/JPEG format. </li><li>
The participant is expected to send us the photo between 14/03/2021 & 27/03/2021. </li><li>
Only entries from Google form will be considered. </li>
</ol>

Entries may be uploaded on social media by the Revival Core Committee, strictly subject to their convenience. By participating, you give consent to the Revival Core Committee for such use. In case of any issue, do contact your respective institute’s Revival Secretary.

  `;

  timeline.innerHTML =`
<ul style="list-style-type:disc;">
<li>Registration opens on 14/03/2021</li><li>
Registration cum submission ends on 27/03/2021.</li>
</ul>
All participants are required to fill the form within the deadline. all further communications will be done through the mail/contact provided in the form.


  `;

  sub_details.innerHTML=`
<a href="https://forms.gle/9FT36eTkkUgYvJCQA" style="color:blue;">Submit Here</a>

`;

  contact.innerHTML=`
<ul style="list-style-type:disc;">
<li>
Shounak Hinge, convener, <a href="https://www.instagram.com/lumiere.iiserm/" style="color:blue;">Lumière</a> </li>
<li>9145496175 </li><li>
29shounak.hinge@gmail.com </li><li>
<a href="https://www.instagram.com/shounak_hinge/" style="color:blue;">@shounak_hinge</a></li>
</ul>


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
Do you ever feel that your brain save way more pop-culture information as opposed to things in your actual curriculum?
Well then, hold on to your knowledge about the latest movies, the best of the books, and the chart topping songs and the news buzz for the brand new MELA QUIZ!,
conducted by IISER TVM.<br><br>
Become the trivia queens (and kings, of course) by sailing through the prelims and the finals.


    `;

  event_details.innerHTML =`

  `;

  prizes.innerHTML=`
IISER TVM Quiz Club will update soon.
  `;

  judging_criteria.innerHTML=`
NA
  `;

  elegibility.innerHTML=`
<ul style="list-style-type:disc;">
<li>The participating individual should be a currently enrolled student of the participating institutes. </li>
</ul>
  `;

  guidelines.innerHTML=`
<ul>
<li> A team shall consist of a maximum of 2 members. Lone wolves are welcome. (Participants need not to be from the same institute)</li><li>

There is no restriction on the number of teams from an institute</li><li>

Participants are encouraged to pre-register. However, spot registrations may be permitted as per the situation.</li><li>

The quiz will happen in two rounds, prelims and finals.</li><li>

All decisions made by the Quizmaster, including those regarding tie-breaks, will be final.</li><li>

Further instructions will be given on the day of the quiz.</li><li>

Any form of malpractice is discouraged. If any of the teams are found carrying out such behavior, they will be disqualified.</li>
</ul>

  `;

  timeline.innerHTML =`
<ul>
<li>Registration starts on 26th March</li>
<li>Registration ends on 02nd April</li>
<li>Quiz happens on 03rd April</li>
</ul>
  `;

  sub_details.innerHTML=`NA`;

  contact.innerHTML=`
<ul>
<li>Tony Nixon Mavely - 8281517015 </li><li>
 tonynixonmavely17@iisertvm.ac.in </li><li>
culturalclub@iisertvm.ac.in</li>
</ul>
  `;

  //show the popup

 document.getElementById('container').style.display='block';

}
