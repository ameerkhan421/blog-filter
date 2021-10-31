/* <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"> </script> */

// const reduce = function(list, cb, initial ) {    //list[0]
//     let memo = initial;      // || list[0];
//     for (let i = 0; i< list.length; i++) {
//         if (i === 0 && !!memo) {
//             memo = list[0]
//         } else {
//             memo = cb(list[i], memo)
//         }
//     }
//     return memo;
//   }
  
//   console.log(reduce([1,2,3],(v, sum) => v + sum, 0));




//   <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://social.us5.list-manage.com/subscribe/post?u=d4d055a6a93f7fb98c2905b59&amp;id=5051d1c3a0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d4d055a6a93f7fb98c2905b59_5051d1c3a0" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// <!--End mc_embed_signup--></link>

// const newDevelopment = [
//       {
//         name: 'ameer',
//         present: true,
//         rooms: [
//            {kitchen: false},
//            {ballroom: false},
//            {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//              {library: false}
//           ]
//       },
//         {
//         name: 'khann',
//         present: false,
//         rooms: [
//            {kitchen: false},
//            {ballroom: false},
//            {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//              {library: false}
//           ]
//       },
//       {
//         name: 'khann',
//         present: false,
//         rooms: [
//            {kitchen: false},
//            {ballroom: false},
//            {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//              {library: false}
//           ]
//       },
//     ];
    
//     const notInRoom = (suspect, memo) => {
//         const  emptyRooms = reduce(suspect.rooms,(room, memo) => {
//             if (room === false) memo.push(room)
//             return memo
//         }, []);
//         return emptyRooms;
//     }
//     notInRoom = _.map(newDevelopment, notInRoom)
//     [
//         ['kitchen', 'ballroom', 'billiard room'],
//         ['kitchen', 'ballroom']
//     ]

//     _.intersection(...notInRoom)

// composing

// const consider = (name) => {
//     return `I think it could be... ${name}`;
// };

// const exclaim = (statement) => {
//     return `${statement.toUpperCase()}!`;
// };

// const blame = _.compose(consider, exclaim);
// console.log(blame('you'));

// const myAlert = () => {
//     const x = "Help i think i found a clue";
//     let count = 0;
//     const alerter = () => {
//         alert(`${x} ${++count}`);
//     };
//     return alerter;
// };

// const funcAlert = myAlert();
// const funcAlert2 = myAlert();
// console.log(funcAlert);


// const finndSomeone = () => {
//     const speak = () => {
//         console.log(who);
//     };
//     let who = 'why hello there, prof ';
//     return speak;
// };
// const someoneSpeak = finndSomeone()

//  console.log(someoneSpeak());


 const details =[
     {
         cars: ['aulto', 'marthii', 'soda'],
         carsyears: ['1221', '5312', '55562']
     },
     {
        bikes: ['auto', 'arthii', 'oda'],
        bikesyears: ['221', '512', '5562']
    }
 ];
 
//  details.forEach(function(element){
//     Object.keys(element).forEach((keys, indx, arr) => {
//         // console.log(element)
//         if(indx === 0) {
//         element[keys].forEach((name, inIndx) => {
//                 console.log(keys,name,element[arr[1]][inIndx])
//             })
//         }
//     })

// });

details.forEach(function (ele) {
    Object.keys(ele).forEach((keys, indx, arr) => {
        if(indx===0) {
            ele[keys].forEach((name, Inidx) =>{
                console.log(keys,name,ele[arr[1]][Inidx])
            })
        }
    })
});