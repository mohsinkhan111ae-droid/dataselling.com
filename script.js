document.getElementById('scan-qr').addEventListener('click',()=>{
  document.getElementById('qr-block').style.display='block';
});

document.getElementById('submit-utr').addEventListener('click',()=>{
  const utr = document.getElementById('utr').value.trim();
  const msg = document.getElementById('utr-msg');
  if(!utr){
    msg.textContent="Please enter your UTR / Txn ID.";
    msg.style.color="red";
  } else {
    msg.textContent="UTR submitted successfully!";
    msg.style.color="green";
  }
});

// Refund
document.getElementById('refund-btn').addEventListener('click',()=>{
  alert("Refund request submitted. Our team will contact you soon.");
});

// Fake withdrawal notifications
const notifContainer=document.getElementById('notif-container');
const users=["Arif","Bilal","Sana","Imran","Nida","Sameer","Khalid","Asif","Rizwan","Tariq",
             "Salma","Iqbal","Shahid","Farah","Adnan","Mehreen","Yasir","Rehan","Parvez","Naveed",
             "Rubina","Hamid","Faizan","Zoya","Rafiq","Rukhsar","Shahnawaz","Kiran","Muzamil","Aliya"];
function showNotif(){
  const user=users[Math.floor(Math.random()*users.length)];
  const amt=Math.floor(Math.random()*500)+100;
  const div=document.createElement('div');
  div.className='notif';
  div.textContent=`${user} just withdrew ₹${amt}`;
  notifContainer.appendChild(div);
  setTimeout(()=>{div.remove()},4000);
}
setInterval(showNotif,6000);

// Get App popup
const popup=document.getElementById('popup');
document.getElementById('get-app').addEventListener('click',()=>{
  popup.style.display='flex';
});
document.getElementById('close-popup').addEventListener('click',()=>{
  popup.style.display='none';
});
