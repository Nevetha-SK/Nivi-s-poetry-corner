document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const modal = document.getElementById('poemModal');
    const closeBtn = document.querySelector('.close');
    const poemTitle = document.getElementById('poemTitle');
    const poemContent = document.getElementById('poemContent');
    const poemAuthor = document.getElementById('poemAuthor');

   
    const poems = {
        poem1: {
            title: "Randomno 1",
            content: `I write .... and write and write
A beautifully woven piece of words
But who's gonna tell me that these words will forever be just words?`,
            author: "Nivi",
        },
        poem2: {
            title: "Randomno 2",
            content: `The world is ruthless.
The things we love are labeled as sin While the actual sin is hailed as the art of survival.`,
            author: "Nivi",
        },
        poem3: {
            title: "Randomno 3",
            content: `The world is ruthless.
The things we love are labeled as sin While the actual sin is hailed as the art of survival.`,
            author: "Nivi",
        },
        poem4: {
            title: "Randomno 4",
            content: `காலம் கடந்து காத்திருக்கிறேன் முடிவில்லா ஓர் பயணம் செல்ல.... செல்வோம் வா....`,
            author: "Nivi",
        },
        poem5: {
            title: "Randomno 5",
            content: `நொடிப்பொழுதில் மறைந்து செல்லும் உன்னை என் கண்களினால் தொட்டுவிட முயல்கிறேன்`,
            author: "Nivi",
        },
        poem6: {
            title: "Randomno 6",
            content: "The world may crumble into pieces\nBut my eyes would still search for you in the rubbles.",
            author: "Nivi",
        },
        poem7: {
            title: "Randomno 7",
            content: `விழியை தீண்டும் முன்னரே என் மனதை தீண்டிச் சென்ற நீ நெருங்க நினைக்கையில் மட்டும் மறைந்து செல்கிறாயடா என் மாயவா`,
            author: "Nivi",
        },
        poem8: {
            title: "Randomno 8",
            content: "Falling for you was a divine punishment!",
            author: "Nivi",
        },
        poem9: {
            title: "Randomno 9",
            content: `உன் நினைவுகளின் பிடியில் சிக்கிய எனக்கு
                      அந்த மேகங்களை போல் நகர்ந்து செல்லத் தெரியவில்லை
                      அதனால், வானத்தின் கீழ் பிழைத்த நான்
                      வானத்தின் வண்ணங்களின் உள் உன்னை சிறை பிடிக்க முயல்கிறேன்`,
            author: "Nivi",
        },
        poem10: {
            title: "Randomno 10",
            content: `தேடலில் ஒளிந்திருக்கும் உன்னை தேடியே என் தேடல் அனைத்து இருக்கிறதே....`,
            author: "Nivi",
        },
        poem11: {
            title: "Randomno 11",
            content: "The moon rises in the east,\nCasting its silver light,\nOn the world below,\nIn the stillness of the night.",
            author: "Nivi",
        },
        poem12: {
            title: "Randomno 12",
            content: `வாய்ப் பேசா பூவிடம்
                      உந்தன் அழகை பாடிடவே
                      பூவும் திணறிப் போனது
                      திணறியப் பூவை தலையில் சூடி
                      உன் அழகைக் காண
                      இருவரும் நடையை கட்டினோம்`,
            author: "Nivi",
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
