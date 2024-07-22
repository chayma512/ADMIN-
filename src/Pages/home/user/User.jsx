import React from './user.css'

export default function user() {
  return (
    <div className="user">
        <div className="userTitleContainer">
      <h1 className="userTitle">Edit User</h1>
    <link to="/newUser">
          <button className='userAddButton'> Create </button>
</link>
    </div>
    <div className='userContainer'>
        <div className='userShow'>
            <div className='userShowTop'>

                <img
                src='https://www.pexels.com/fr-fr/video/ete-soleil-jardin-herbe-17127360/'alt=''className='userShowImg' />
                        <div className='userShowTopTitle'>
                            <span className="userShowUsername">anna becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                        </div>

            <div className='userShowBottom'>
              <span className='userShowTitle '>Account Details </span> 
             <div className="userShowInfo">
              <PermiIdentity  className="userShowIcon "/>
              <span className=' userShowInfoTitle'>annabeck</span>
            </div>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon"/>
              <span className=' userShowInfoTitle'>contact details</span>
            </div>
            
            <div className="userShowInfo">

              <CalendarToday className="userShowIcon"/>
              <span className=' userShowInfoTitle'>annabeck</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon"/>
              <span className=' userShowInfoTitle'>10.12.1999</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon"/>
              <span className=' userShowInfoTitle'>NEW YORK </span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon"/>
              <span className=' userShowInfoTitle'>+123 4 4 4 </span>
            </div>
            </div>

    </div>
    <div className='userUpdate'></div>
<span className='userUpdateTitle'>Edit</span>
<form className="userUpdateForm"> 
  <div className='userUpdateLeft'>
    <div className="divuserUpdateItem">
      <label>Username</label>
      <input type="text" placeholder='annabeck' className='userUpdateInput' />
      <div className="divuserUpdateItem">
      <label>Username</label>

      <input type="text" placeholder='anna' className='userUpdateInput' />
      </div>
      <label>Full Name</label>

      <input type="text" placeholder='annabeck' className='userUpdateInput' />
      <label>Email</label>

      <input type="text" placeholder='annabeck@gmail.com' className='userUpdateInput' />
      
      <label>Adress</label>
      <input type="text" placeholder='NewYork' className='userUpdateInput' />

    </div>
    </div>
<div className="userUpdateRight">
  <div className='userUpdateUpload'>
    <img className='userUpdateImg' src="https://www.pexels.com/fr-fr/photo/soleil-couchant-coucher-de-soleil-coucher-du-soleil-gens-26997915/"></img>
  <label htmlFor='file'><Publish/></label>
  <input type='file' id="file" style={{display: "none"}}/>
  </div>
  <button className='userUpdateButton'>Update</button>
</div>
</form>

    </div>
    
   
  );
}
