---
title: "Making Mathematical MONSTERS"
date: 2023-09-11T16:54:54+02:00
draft: true
---
{{< math_post >}}

### Introduction: axiomatizing natural numbers

In math, we often start out by defining objects whose existence and properties seem obvious and common place. For example, many introductory university level courses will go out of their way to define the natural numbers. As mundane as it seems, I like the mental motion of formalizing such obvious objects. This process is a sampling of one's sub-conscious that gives me a brief taste of just how many of the contents of my head will never exit the world of the murky and implicit.
____

The natural numbers are a set of objects which satisfy the following axioms:

0. 0 is a natural number (if you'd rather make 1 the first natural number, pretend 0 is just a funny name for 1)

1. each natural number n has exactly one successor, S(n)

2. each natural number has exactly one predecessor, except for zero which has no successor.

3. (Principle of Mathematical Induction) suppose that a certain statment P is true of 0, and that for any number n, P(n) implies P(S(n)). Then, P is true for all natural numbers.

____

The first time I read through these axioms, I was confused by the Principle of Mathematical Induction (PMI) axiom. I frowned to myself that PMI seems to be formalizing something that is already quite obvious - aren't proofs by induction already rigorous all on their own?

Months later, I tried taking out the PMI axiom to see what would happen to my set of 'natural numbers.' Initially, nothing seemed off at all. 0 is still the first natural numbers. Natural numbers still follow and preceed each other just as one would expect them to. 'the number line behaves just like it should,' I thought. 

But hold on... why is it **the only** number line?
 
In that moment, a MONSTER started materialising in my head. It looked like a number line, but adjacent to it appeared another 'number' line, with elements \\(\alpha , \beta , \gamma , ... \\) succeeding each other just like the normal natural numbers would. This extra 'number line' would violate axiom 2, however. This is because \\(\alpha\\) wouldn't have a successor. With this in mind, I designated \\(\alpha\\) as the successor of \\(\gamma\\), turing my number line into a number *loop* with three elements. THE MONSTER is defined as the set of the 'normal' natural numbers *and* the set \\(\{\alpha , \beta , \gamma \}\\) such that \\(\beta = S(\alpha), \gamma = S(\beta)\\) and \\(\alpha = S(\gamma)\\). THE MONSTER complies with axioms 0, 1, and 2, but does so mischievously. It's clearly not the set we had in mind when we set out to define the 'natural numbers.'

With this MONSTER in mind, we introduce the PMI axiom. Suppose our set of 'natural numbers included a disgusting number circle disconnected from our number line. Then while the hypotheses of PMI could be true for some statement P, the conclusion wouldn't necessarily follow. This is because no matter how many times we jump from 0 to its successor, and *its* successor, and so on, we will never be able to use the hypthesis to say that P(\\(\alpha\\)) is true, since its just not on the same number line. Thus, the monster is banished, and we can safely sleep at night knowing that no circular deformity will disturb our perfect, sequential number line anymore.

### Philosophy of THE MONSTER 

(This section is to some extent inspired by *Proofs and refutations*[^8], a fantastic work of mathematical philosophy.)

Mathematical MONSTERS are delightful creatures which mischievously comply with the rules of a mathematical object, while obviously defying their intention. Monsters are sometimes annoying objects because they can get in the way of whatever we're trying to do. Our defined or axiomatized system may cease to behave how we want it to. For example, a statement like 'all natural numbers have property X' may not be true if there are some impostor 'natural numbers' that we merely failed to define out of the category.

As a result, a chronic condition suffered by some mathematicians is the compulsion to expel monsters in search of platonic, perfectly defined mathematical objects. History is filled with meticulous pedants such as [name from proofs and refutations] who devoted large parts of their mathematical careers to refining their definitions of object by systematically slaying monster after monster.

The problem with this, of course, is that each restriction is nothing but an ad-hoc adjustment that slays one *particular* monster, but not all of them in generality. This inevitably leaves the monster-barrer in a perpetual state of uncertainty as to whether their mathematical objects are actually safe from monsters or not. For example, I may have banished the apendage of a circular \\((\alpha,\beta,\gamma)\\) tumour to my beautiful number line, but nothing guarantees me that there isn't *some other* monster waiting in the shadows. I call this state of limbo *the itch.*

On the other side of the political aisle, there exist the natural counterparts to the monster-barrers: those mathematicians who, rather than treating *the itch* as an ailment, see in it an inspiration to create monsters which seek to challenge or invalidate accepted frameworks and results. Karl Weierstrass (1815-1897) was a well-known and celebrated creator of monsters. In particular, he is held responsible for the first published[^7] instance of a function which is everywhere continuous but nowhere differentiable, an object which challenged the consensus that continuitity implied differentiability at almost[^4] all points.

There are examples across history of legendary struggles between monster-barrers and monster-breeders. Unfortunately, these fights have the potential to be unproductive. The monster-barrers often contort their definitions of objects into increasingly ugly and unintuitive forms, explicitly or implicitly barring a growing list of exceptions and asterrisks. On the other hand, the monster-breeders come up with increasingly convoluted, 'technically correct' monsters whose validity often depends on exploiting, in bad faith, imprecise wording or other technicalities to create new pathologies.

Some such struggles are both documented and parodied brilliantly in 'Proofs and Refutations,' a humorous work of mathematical philosophy by Imre Lakatos. It's a fantastic read I thoroughly recommend.

It's easy to sympathise with the frustration of the monster-barrers. As an analogy to their situation, you can imagine sitting down and trying to formally define what a chair is. You might start with: 'a chair is something you can sit down on.' Then, a contrarian, asks you whether a log of wood is a chair, since you can technically sit down on it. You might amend your definition by adding the restriction that a chair needs to have legs, but the contrarian might persist by inquiring whether a bed is a chair by your definition, and so on. For every restriction you introduce that you hope bars all the exceptions, the contrarian might come up with a new monster which obeys all the rules of chair-dom, but clearly isn't a chair! Such a conversation could be very frustrating indeed. This is because we all *know* what a chair is, and the contrarian's exceptions seem motivated not by a desire for insight, but rather a desire to get one over on you. Such a discussion would be a waste of time indeed! 

Poincaré argues along these lines in his 1907 book[^6], where he discusses Weierstrass' monsters. The book laments that some monsters do nothing but prove our mathematical ancestors wrong without providing insight. He writes [insert quote].

In further support of the monster-barrer's view, there's an undeniable appeal to having a perfectly-defined mathematical object which flawlessely, unambiguously describes exactly what we want it to. Nevertheless, i'm not actually here to take the side of the monster-barrers, but rather to argue *for* the value of monsters and of their use, in good faith, being key to advancing our understanding of math.

### Reframing the itch

I still remember what it was like to first learn about vectors in school. In my head, vectors were little arrows in 2D or 3D space which pointed in a certain direction. I also learned that vectors have a 'magnitude,' which was a way of saying 'how big' the vector was. For quite a while, vectors weren't abstract mathematical objects, but rather very specific physical things.

Naturally, when I first learned about *vector spaces* in my first linear algebra course, I would seek to fit the abstract mathematical definitions in with my robust, limited model of what a vector was. I would sketch 2D vectors out on a piece of paper and would use all kinds of diagrams illustrating the axioms and properties of *vector spaces* in a solid framework I was already familiar with. 

Working up my understanding of vectors as generalised mathematical objects by grounding  myself with knowledge about simple, 'physical' vectors no doubt helped me get my head around the topic. Moreover, this grounding in physical vectors is faithful to the interpretation that vector spaces are. Any definition of a *vector space* that excludes the fundamental primary school idea of what a vector is wouldn't be acceptable, because we *do* in part want to describe vectors mathematically with vector spaces.

If the role of vector spaces is to explictly write down our intuitive notions of vectors, the strict, committed monster-barrer might express their annoyance that there are so many things that aren't vectors, but *do* qualify as vector spaces. 'Look!' they would say, 'the set of continuous functions defined on \\([0,1]\\) is a vector space, and so is the set of solutions for a linear differential equation; not to *mention* the set of \\(2 \pi \\)-periodic functions over the real numbers. Obviously, we must define these objects out of being vector spaces.'

However, it is precisely here that the ideology of the categorizing monster-barrer reveals its limitations. Vector spaces are some of the most indispensable and omnipresent objects in mathematics precisely *because* they are so generalized. Their power comes exactly from the fact that vectors share their properties with many other objects. Vector spaces create a common, abstracted language in which we can talk about all of these different things at the same time. Seen from this perspective, strict, exclusive definitions limit our scope without enlightening. Conversely, abstraction and generalization are the powerful language through which we learn to say more and think more. [^9]

To return to an early example, we introduce the Principle of mathematical induction because we can't stand the idea of having an \\((\alpha,\beta,\gamma)\\) in our natural numbers, but rather because we PMI is a neat, cool property for an object to have. Our goal is not to strictly categorize the natural numbers, but rather to set up a framework where we can meaningfully talk about them. In this light, I can say that the possibility that there exists another 'monster' somewhere isn't too concerning because my axioms are already powerful enough to tell me a lot about 'the natural numbers' as they are. Furthermore, the monsters that could still be lurking in the shadows just as likely to be threats as they are to be doorways to insight and discovery. 

In conclusion, we reframe *the itch,* not as annoying threat to our categorized world, but rather as the drive to generalize by connecting concepts with each other - to develop languages in which we can expand our insight of the world.

<!--- Secretly, however, MONSTERS are actually our helpers. 


When I couldn't understand why the induction axiom was needed for the natural numbers, removing it birthed a MONSTER which helped me realize why the axiom was there in the first place. 
-->

----

## Conclusion


----

[^1]: The Peano axioms, as they are called, are usually presented more formally attempting to properly define things like equality between elements of the set of natural numbers and what the successor functiton is. You can even get into what it means for something to be true if you're really picky. Given in this post is a simplified version so you get the gist without getting lost in the detail

[^2]: For an example of this, you can convince yourself that the absolute value function on the real number, \\(|x|\\), is continuous at 0, but that it's hard to meaningfully assign it a slope at 0.

[^4]: formally, nearly all the time means for all except a countably infinite amount of points.

[^6]: [Science and method, 1908 Poincaré (1914 translation). Page 125.](https://archive.org/details/b21974123/page/124/mode/2up)

[^7]: [weierstrass original paper (german) with the pathological function defined](https://books.google.com/books?id=1FhtAAAAMAAJ&pg=PA71). It's worth noting that Weierstrass wasn't the first to concoct such a MONSTER, but he is the first known to have published a complete, proven example.

[^8]: Lakatos, Imre, Proofs and Refutations: The Logic of Mathematical Discovery

[^9]: To paraphrase a mathematician I know: math is all about learning that there's an even more generalized vesion of the last generalization you managed to wrap your head around.