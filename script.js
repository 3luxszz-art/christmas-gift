const text = `
Merry Christmas, Bella.

I know this probably isn’t what you expected to get today especially from me.
But I meant it when I said I wanted to give you something, and since you didn’t want me 
to buy you anything, I wanted to make you something instead.

This might be a little long, but it’s just me showing my appreciation.

First, Merry Christmas again. I hope today goes well for you, that you enjoy the gifts 
you receive, and that the people around you love the gifts you give. When we first met, 
I never imagined we’d become this close, and I definitely didn’t expect my feelings for 
you to grow as much as they have.

I’m sorry for the things I did at the start of our friendship the jokes, the pranks, 
everything. I’m also sorry for anything this year that caused problems, especially the 
issues with you and Sergio because of me. I never wanted to make anything harder for you.

You’ve helped me so much this year, and I don’t think I say that enough. You really are 
the best friend I could have asked for. Whether you see me that way or not, I appreciate 
you more than I ever say out loud. I hope I’ve been even half as good of a friend to you 
as you’ve been to me. If I haven’t, I’m sorry.

You deserve so much more than the friend I’ve been at times, and I truly am sorry for 
everything. You’re one of, if not the most, genuine, kind hearted people I’ve ever met. 
You’re a good person like genuinely good and that’s rare. Being one of your friends is 
one of the best things that’s happened to me.

You make things better without even realizing it. Talking to you is one of the best 
parts of my day. You matter to me probably more than you think. I value your opinions 
and your thoughts a lot, especially when it comes to how you see me. I’m grateful to 
have you in my life.

And honestly… I can’t stop thinking about you. It’s been driving me a little crazy. 
I think my feelings for you are stronger than I even realized, and maybe that’s why 
I get nervous around you or hesitate to say certain things.

I don’t want this to turn into that kind of letter, but I remember you once said 
you loved me and hoped I wouldn’t take it the wrong way or find it weird. I don’t 
remember if I said it back at the time, but I hope you don’t find it weird when I say 
this I love you too whether you meant it in a friendly way or something more.

I would hate to lose someone as good of a friend as you are. Maybe that’s why I’m so 
quick to understand, or so quick to give you space because sometimes I worry I’m 
bothering you. But still, thank you for being my friend. I hope you get everything 
you wished for, because you deserve that and so much more.

Sorry for not getting you anything else this year next year I’ll do better :)

Merry Christmas 🤍
`;

let i = 0;
const speed = 35;

function type() {
  const el = document.getElementById("typed-text");
  if (!el) return; // safety
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

document.addEventListener("DOMContentLoaded", type);
