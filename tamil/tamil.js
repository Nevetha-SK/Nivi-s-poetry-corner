document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const modal = document.getElementById('poemModal');
    const closeBtn = document.querySelector('.close');
    const poemTitle = document.getElementById('poemTitle');
    const poemContent = document.getElementById('poemContent');
    const poemAuthor = document.getElementById('poemAuthor');

    
    const poems = {
        poem1: {
            title: "நீதான் நிலவே..",
            content: "பெண்ணுக்கு உவமை ஆனாய்,\nநீயோ எனக்கு தூர தேசத்து இளவரசன்\nஅளவில்லா அழகையும் அள்ளிச் சென்றாய்\nஎன் ஆசைகள் அனைத்தையும் நீளச் செய்தாய்\nபுரியாத மொழியில் மௌனம் பேசாதே மதி கெட்ட எனக்கோ விளங்காதே\nவிடியும் முன் கூறிவிடு\nஎன் இளவரசன் நீ இல்லை replace this\nஉனக்கு உவமை ஆக்கப்பட்ட என்னவன் என்று",
            author: "நிவி"
        },

    };

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const poemId = box.getAttribute('data-poem');
            const poem = poems[poemId];
            if (poem) {
                poemTitle.textContent = poem.title;
                poemContent.textContent = poem.content;
                poemAuthor.textContent = `- ${poem.author}`;
                modal.style.display = 'block';
            }
        });

        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)';
        });
        
        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
