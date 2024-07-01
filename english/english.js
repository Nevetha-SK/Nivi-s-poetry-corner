document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const modal = document.getElementById('poemModal');
    const closeBtn = document.querySelector('.close');
    const poemTitle = document.getElementById('poemTitle');
    const poemContent = document.getElementById('poemContent');
    const poemAuthor = document.getElementById('poemAuthor');

   
    const poems = {
        poem1: {
            title: "The Replay Button",
            content: `An hesitant start
With endless doubts & dislikes
But it all ended when we got tangled in the tales of academics & people 
A place where all our fears started & ended at the same time
We studied less, But learnt more
More familiar faces that holds the best place in our hearts
Who knows that we were crafting memories while we were busy writing assignments?
We were slowly walking towards the end of a beautiful journey while we were enjoying our semester holidays
Time passes like magic
So, like this rhyming less poem.... Be rhyming less, Be crazy
Get the best out of you
Show off your talents and watch people crave for the things you have
Not all hesitant beginnings has a disastrous endings
Some may end with Graduation and friends for a lifetime
This beautiful journey may end
But we'll have our own Replay Buttons to play our very own college days of our lives!!`,
            author: "Nivi"
        },
        poem2: {
            title: "Our Wedding Star",
            content: `Holding onto each other, We never known anything but love.

His whimsical smile, Stands in contrast to his well-tucked suit. This delicate moment, Comes in harmony with my heart And shooting stars into my skin.

Here me, Star! "Even if we fall apart, Help us to find each other, Guide us through our darkest nights." And as the Pastor says, "I now pronounce you
husband and wife"

I declare you as "Our Wedding Star"`,
            author: "Nivi"
        },
        poem3: {
            title: "A Wicked Daisy",
            content: `Cherry stain on her lips 
Muted stares everywhere
Shadows hereabout her footsteps 
Tragic wind that blew past
Turned the daisy into a deadly nightshade 
Wickedness, Her new face 
Abyss, Her new home 
Tied to a million labyrinth 
An idyllic remedy 
For her reckless needs 
A So Wicked Daisy`,
            author: "Nivi"
        },
        poem4: {
            title: "Roses n Rainbow",
            content: `Taking up the magical trance 
And engulfed in a crystal reflection of the blue
Reflections of who I yearn to be
You weaved a comfy couch to rest up my heart 
So that you could listen to my hues of untold stories 
With each moment of the whispering breeze
I'm carried away to distant horizons
As day and night interlace
I find fragments of dreams, longing to last 
Bestow your Rainbows upon me
'Cause I'm the pot of Roses, At the end of all universe
Who blossomed for this firmament`,
            author: "Nivi"
        },
        poem5: {
            title: "Untitled",
            content: `Under the city lights, I feel myself shrinking, Fear I might become one of those flickering ones- Too bad to keep, yet cared less to replace. As I try to take the essence of people's presence, Nothing but broken souls covered in bones. I see a shade of everyone's in everyone. There's so much to see in them, almost always Making me think about the bits and pieces of my own That die like a flicker of light Every time I switch up a side. All I wanted to do is to keep walking, Leaving pieces of myself lingering in the air That touch people in a way that nothing does Soft reminders of me, even when I'm gone- My favourite way to live.`,
            author: "Nivi"
        },
        poem6: {
            title: "Remote Destiny",
            content: `Thoughts are flying inside my head like fireflies
Lighting my life everyday
I remember the colour of your cheeks Now a faded shade Buried in my memories Though you are far away You still seem closer to me And it still feels like Day 01 But a Remote Destiny.`,
            author: "Nivi"
        },
        poem7: {
            title: "Lost Romeo",
            content: `Alley of shattered heart
            Stumbled upon, weary mind
            All blues, no hides
            My happiness smeared across your hand's knife
            Paint it again the way you like
            Make a hasty sketch on me
            Now I'm lost
            Under your light
            Heading to the bridge of broken promises
            Crying out with my parched throat
            Trying to find you
            In an ecstatic way
            My Lost Romeo`,
            author: "Nivi"
        },
         poem8: {
              title: "A Table For Two",
             content: `Dwelling under the blue roof Painting the world with our emotions
            The unspoken words of yours
            And the unshown feelings of mine
            Will get shattered within a matter of time
            Time is ticking So, get a table for two
            A cup of coffee? or a scoop of icecream?
            Or a delightful talk that sweetens the air?
            The choice is yours!!`,
             author: "Nivi"
},
        poem9: {
            title: "It's My Favourite...",
            content: `I love this, these and that
I love what other's love
And I love what other's don't
No one can understand what I love
People make fun about it
Because they don't have the ability to see it from my side
I feel happy that only I love it but others
Thanks for not loving it
So now I can say with a pride that only I love it
Your criticisms and bad comments can't even stand
next to what I love
Because you are too normal to talk about what I love
Stop calling names about the things I love
And start improving yourself to be equal to the things I love
Because I call it as My Favourite and you are not one among them`,
            author: "Nivi"
        },
        poem10: {
            title: "Orange Magic!",
            content : `Sitting in the sky between the clouds
You are looking at me, Ready to wave a goodbye.
The way you blur my vision, when all I want is to capture you
The after effects of looking at the Sun!
The whole city is gonna turn on it's lights
But I'm gonna lose my light
I know you'll find me sooner
Yet I wanna be trapped in this moment, With you and me
The moment where all I see is the Orange Magic Of Yours!`,
            author: "Nivi"
        },
        poem11: {
            title: "YOU",
            content: `You,
You took many forms
The Sunset
The Stars
The Flowers
The Colours
The Breeze
The Ocean
But you as My Tears
Is the one I love
Everything remained and faded away
But tears alone remained, stained
Through all time, even when you were not
With me`,
            author: "Nivi"
        },
        poem12: {
            title: "Ostentatious Orb!",
            content: "Can't you just understand?\nHow much you show off yourself\nThink I might turn blind\nBy your Ostentatious behaviour.",
            author: "Nivi"
        }
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
