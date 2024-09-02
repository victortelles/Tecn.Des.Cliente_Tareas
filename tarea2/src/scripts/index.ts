document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../data/data.json');
        const data = await response.json();

        // Cargar tecnologias
        const techList = document.querySelector('.technologies .list-tech-hobb-skills');
        data.technologies.forEach((tech: { icon: string, name: string }) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-brands ${tech.icon}"></i> ${tech.name}`;
            techList?.appendChild(li);
        });

        // cargar skills
        const skillsList = document.querySelector('.skills .list-tech-hobb-skills');
        data.skills.forEach((skill: { icon: string, name: string }) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid ${skill.icon}"></i> ${skill.name}`;
            skillsList?.appendChild(li);
        });

        // cargar Hobbies
        const hobbiesList = document.querySelector('.hobbies .list-tech-hobb-skills');
        data.hobbies.forEach((hobby: { icon: string, name: string }) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid ${hobby.icon}"></i> ${hobby.name}`;
            hobbiesList?.appendChild(li);
        });

    } catch (error) {
        console.error("Error al cargar los datos JSON:", error);
    }
});
