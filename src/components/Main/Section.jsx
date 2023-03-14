import React, { useState } from 'react'
import "./Section.css"
import rasm6 from "../../assets/rasm6.svg"
import { AiOutlinePlus } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"

  

 const Section = () => {

  const  [ inputValue, setInputValue ] = useState('');

  const formChangeHandler  = (e) =>{
    e.preventDefault();
  }
  const changeNameHandler = (e) =>{
    setInputValue(e.target.value);
  }

  return (
    <div className='Section'>
      <img className='rasm6' src={rasm6} alt="" />

    <div className="batafsil">
    <h2 className='savollar'>
      Ko'p so'raladigan savollar
      </h2>
      <p className='qoshimcha'>
      Qo'shimcha ma'lumot uchun biz bilan bog'laning
      </p>
      <button className='qosh-btn'>Batafsil</button>
    </div>
    {/* <div className="savollarAll">
      <li className='boshqacha'>
      <span>01</span>
      <p>Какой состав сока Alatoo?</p>
      <div className="close-boshqacha"> <GrFormClose /></div>
      </li>
      <li>
      <span>02</span>
      <p>Сколько стоит Алатоо и сколько стоит доставка?</p>
      <AiOutlinePlus className='plusLine'/>
      </li>
      <li>
      <span>03</span>
      <p>Здравствуйте, аллергия часто на этот сок?</p>
      <AiOutlinePlus className='plusLine'/>
      </li>
      <li>
      <span>04</span>
      <p>Эффективен ли сок Алатоо при часто рецидивирующем герпесе?</p>
      <AiOutlinePlus className='plusLine'/>
      </li>
      <li>
      <span>05</span>
      <p>Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?</p>
      <AiOutlinePlus className='plusLine'/>
      </li>
    </div> */}
  







  {/* <div className="accordion accordion-borderless" id="accordionFlushExampleX">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOneX">
      <button className="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOneX" className="accordion-collapse collapse show" aria-labelledby="flush-headingOneX" data-mdb-parent="#accordionFlushExampleX">
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the first item's accordion body.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwoX">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwoX" className="accordion-collapse collapse" aria-labelledby="flush-headingTwoX" data-mdb-parent="#accordionFlushExampleX">
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the second item's accordion body.
        Let's imagine this being filled with some actual content.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThreeX">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#flush-collapseThreeX" aria-expanded="false" aria-controls="flush-collapseThreeX">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThreeX" className="accordion-collapse collapse" aria-labelledby="flush-headingThreeX" data-mdb-parent="#accordionFlushExampleX">
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the
        <code>.accordion-flush</code> class. This is the third item's accordion body.
        Nothing more exciting happening here in terms of content, but just filling up
        the space to make it look, at least at first glance, a bit more representative
        of how this would look in a real-world application.
      </div>
    </div>
  </div>
</div> */}








<div className="accordion" id="accordionExampleY">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOneY">
      <button className="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
        <i className="fas fa-question-circle fa-sm me-2 opacity-70" />Какой состав сока Alatoo?
      </button>
    </h2>
    <div id="collapseOneY" className="accordion-collapse collapse show" aria-labelledby="headingOneY" data-mdb-parent="#accordionExampleY">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwoY">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
        <i className="fas fa-question-circle fa-sm me-2 opacity-70" />Сколько стоит Алатоо и сколько стоит доставка?
      </button>
    </h2>
    <div id="collapseTwoY" className="accordion-collapse collapse" aria-labelledby="headingTwoY" data-mdb-parent="#accordionExampleY">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThreeY">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
        <i className="fas fa-question-circle fa-sm me-2 opacity-70" />Здравствуйте, аллергия часто на этот сок?
      </button>
    </h2>
    <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY" data-mdb-parent="#accordionExampleY">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThreeY">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
        <i className="fas fa-question-circle fa-sm me-2 opacity-70" />Здравствуйте, аллергия часто на этот сок?
      </button>
    </h2>
    <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY" data-mdb-parent="#accordionExampleY">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThreeY">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
        <i className="fas fa-question-circle fa-sm me-2 opacity-70" />Эффективен ли сок Алатоо при часто рецидивирующем герпесе?
      </button>
    </h2>
    <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY" data-mdb-parent="#accordionExampleY">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
</div>

















       <div className="nuqta">
       <p className="bizbn">
        Biz bilan bog'lanish
        </p>
        <h3 className="sorovnomaH1">
        So'rovingizni yuboring
        </h3>
       </div>

<form onSubmit={formChangeHandler}  className="formValidation">

  <div className="col-md-2">
    <div className="form-outline">
      <input type="text" className="form-control is-valid" id="validationServer02" onChange={changeNameHandler} required />
      <label htmlFor="validationServer02" className="form-label">Ism</label>
      <div className="valid-feedback">Ajoyib!</div>
    </div>
  </div>
  <div className="col-md-8">
    <div className="input-group form-outline">
    
      <input type="text"  onChange={changeNameHandler} className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required />
      <label htmlFor="validationServerUsername" className="form-label">Email</label>
      <div className="iltimos invalid-feedback">Iltimos emailingizni kiriting.</div>
    </div>
  </div>

  <div className="col-md-8">
    <div className="form-outline">
      <input type="text"  onChange={changeNameHandler} className="form-control is-valid" id="validationServer02" defaultValue="" required />
      <label htmlFor="validationServer02" className="form-label">Nomer</label>
      <div className="valid-feedback">+998 94 681 |</div>
    </div>
  </div>


  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input is-invalid"  onChange={changeNameHandler} type="checkbox" defaultValue id="invalidCheck3" required />
      <label className="form-check-label" htmlFor="invalidCheck3">Hamma  shartlarga rozilik bildiraman</label>
      <div className="invalid-feedback">Yuborishdan oldin rozi bo'lishingiz kerak.</div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Xabar yuborish</button>
  </div>
</form>










    </div>
  )
}

export default Section
