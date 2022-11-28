import React, { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLenghtError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLenght': 
          value.length < validations[validation] ? setMinLenghtError(true) : setMinLenghtError(false)
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break;
        case 'isEmail':
          const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
          break;
        default:
          break;
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, minLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    emailError,
    inputValid
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}

function Feedback () {
  const email = useInput('', {isEmpty: true, minLenght: 5, isEmail: false})
  const name = useInput('', {isEmpty: true, minLenght: 3})
  const message = useInput('', {isEmpty: true, minLenght: 10})
  let emailValue = email.value
  let nameValue = name.value
  let messageValue = message.value
  let objValue = {emailValue, nameValue, messageValue}

  return (
    <div className='content'>
      <div className='contentHeadingBlock'>
        <h1>Обратная связь</h1>
      </div>
      <form>
        {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
        {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Неккоректная длина</div>}
        {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Неккоректный формат</div>}
        <label htmlFor="email"><span>*</span>Почта</label>
        <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} id="email" name="email" type="text" placeholder="Введите почту" />

        {(name.isDirty && name.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
        {(name.isDirty && name.minLengthError) && <div style={{color: 'red'}}>Неккоректная длина</div>}
        <label htmlFor="name"><span>*</span>Имя</label>
        <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} id="name" name="name" type="text" placeholder="Введите имя" />

        <div className="radioCheckbox">
          <h5>Ваш пол</h5>
          <input className="customRadio" name="gender" type="radio" id="genderMale" value="male" />
          <label htmlFor="genderMale">Мужской</label>
          <input className="customRadio" name="gender" type="radio" id="genderFemale" value="female" />
          <label htmlFor="genderFemale">Женский</label>
        </div>

        {(message.isDirty && message.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
        {(message.isDirty && message.minLengthError) && <div style={{color: 'red'}}>Неккоректная длина</div>}
        <label htmlFor="message"><span>*</span>Сообщение</label>
        <input onChange={e => message.onChange(e)} onBlur={e => message.onBlur(e)} value={message.value} id="message" name="message" type="text" placeholder="Введите сообщение" />
        <div className="inputFile">
          <input type="file" name="file" id="inputFile" className="customInputFile" />
          <label htmlFor="inputFile"> Загрузите чек </label>
        </div>
        <div className="checkbox">
          <input type="checkbox" className="customCheckbox" id="subscription" name="subscription" value="yes" />
          <label htmlFor="subscription">Подписаться на обновления ассортимента магазина</label>
        </div>
        <button disabled={!email.inputValid || !name.inputValid || !message.inputValid} className="greenButton" type="submit" >Отправить</button>
        <button className="greenButton" type="button" onClick={() => (console.log(objValue))}>Отправить в консоль</button>
        <img src="/img/form-img.png" alt="Form" />
      </form>
    </div>
  );
}

export default Feedback;