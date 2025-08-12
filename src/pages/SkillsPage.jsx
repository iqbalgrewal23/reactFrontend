import React, { useEffect, useState } from 'react';
import { getSkills } from '../api/api';

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name}</strong>: {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;