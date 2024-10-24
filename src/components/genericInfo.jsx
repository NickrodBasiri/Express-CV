import '../styles/genericInfo.css';
import PersonalForm from './personalForm';

export default function GenericInfo({ name, setName, email, setEmail, phone, setPhone, personalDisplay, setPersonalDisplay }) {
    const handleDisplay = () => {
        setPersonalDisplay(!personalDisplay);
    }
    return (
        <>
        <button className='inputButton' onClick={handleDisplay}>Personal Information</button>
        { personalDisplay && (    
            <PersonalForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}/>
        )}
        </>
    );
}