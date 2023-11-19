import React from 'react';
import { createRoot } from 'react-dom/client';

type Props = {
  data: {
    nickname:   string
    name:       string
  }
}

function ProfileIndex({data}: Props) {
  return (
    <div className='container'>
      <div className='container'>
        <p>{data.nickname}</p>
        <p>{data.name}</p>
      </div>
    </div>
  )
}

const profile = document.getElementById('profileIndex');
if (!profile) {
  throw new Error('No root element');
}
const data = JSON.parse(String(profile.getAttribute('data')));
createRoot(profile).render(
  <ProfileIndex
    data={data}
  />
);


// function ProfileIndex() {
//   return (
//     <div className='container'>
//       <div className='container'>
//         <p>aiueo</p>
//         {/* <p>{data.nickname}</p>
//         <p>{data.name}</p> */}
//       </div>
//     </div>
//   )
// }

// const profile = document.getElementById('profileIndex');
// if (!profile) {
//   throw new Error('No root element');
// }
// // console.log(profile);
// // const data = JSON.parse(String(profile.getAttribute('data')));
// createRoot(profile).render(
//   <ProfileIndex
//     // data={data}
//   />
// );