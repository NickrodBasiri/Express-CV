import { useState } from "react";

export default function ExperienceForm( {experience, setExperience}) {
    
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState(0);

    const removeExperience = (id) => {
        setExperience(experience.filter((exp) => exp.id !== id));
    }

    const editExperience = (id) => {
        setEdit(true);
        setIndex(experience.findIndex((exp) => exp.id == id));
        const myObject = experience.find((exp) => exp.id == id);
        document.querySelector("#job-name").value = myObject.jobName;
        document.querySelector("#startDate").value = myObject.startDate;
        document.querySelector("#endDate").value = myObject.endDate;
        document.querySelector("#responsibilities").value = myObject.responsibilities;
        console.log(myObject);
    }

    return (
        <>
            <form id="experienceInfo" onSubmit={(event) => {
                const form = document.querySelector("#experienceInfo");
                event.preventDefault();
                const data = new FormData(event.target);
                const newExperience = {
                    jobName: data.get("job-name"),
                    startDate: data.get("startDate"),
                    endDate: data.get("endDate"),
                    responsibilities: data.get("responsibilities"),
                    id: edit ? experience[index].id : Date.now(),
                }
                if (!edit) {
                    setExperience([...experience, newExperience]);
                } else {
                    const updatedExperience = experience.map((exp, i) => 
                        i === index ? newExperience : exp
                    );
                    setExperience(updatedExperience);                    
                    console.log(experience);
                }
                setEdit(false);
                form.reset();
            }}>
                <div id="experience-form">
                    <div className="input">
                        <label htmlFor="job-name">Job Name</label>
                        <input type="text" id="job-name" name="job-name"/>
                    </div>
                    <div id="dateBox">
                        <div className="input">
                            <label htmlFor="startDate">Start Date</label>
                            <input type="text" id="startDate" name="startDate"/>
                        </div>
                        <div className="input">
                            <label htmlFor="endDate">End Date</label>
                            <input type="text" id="endDate" name="endDate"/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="responsibilities">Responsibilities</label>
                        <input type="text" id="responsibilities" name="responsibilities"/>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div id="editButtons">
            {experience.map((exp) => (
                    <div key={exp.id} className="experience-edit-card" id={exp.id}>
                        <h1>{exp.jobName}</h1>
                        <button onClick={() => editExperience(exp.id)}>Edit</button>
                        <button onClick={() => removeExperience(exp.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}