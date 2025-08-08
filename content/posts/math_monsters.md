---
title: "Making Mathematical MONSTERS"
date: 2023-09-11T16:54:54+02:00
layout: math_post
draft: false
---
{{< math_post >}}

### Introduction: axiomatizing natural numbers

In math, we often define objects whose existence and properties seem obvious and common place. For example, many introductory university level courses will go out of their way to define the natural numbers. As mundane as this process can seem, I like the mental motion of formalizing such obvious objects. I see at as a sampling of our sub-conscious: a brief taste of the contents of our minds that rarely, if ever, exit the world of the murky and implicit.
____

The natural numbers are a set of objects which satisfy the following axioms:

0. 0 is a natural number (if you'd rather make 1 the first natural number, pretend 0 is just a funny name for 1)

1. each natural number n has exactly one successor, S(n)

2. each natural number has exactly one predecessor, except for zero which has no successor.

3. (Principle of Mathematical Induction) suppose that a certain statment P is true of 0, and that for any number n, P(n) implies P(S(n)). Then, P is true for all natural numbers.

____

The first time I read through these axioms, I was confused by the Principle of Mathematical Induction (PMI). I frowned to myself that PMI seems to be formalizing something that is already quite obvious - aren't proofs by induction already rigorous all on their own?

Months later, I tried taking out the PMI axiom to see what would happen to my set of 'natural numbers.' Initially, nothing seemed off at all. 0 is still the first natural numbers. Natural numbers still follow and preceed each other just as one would expect them to. 'the number line behaves just like it should,' I thought. 

But hold on... why is it **the only** number line?
 
In that moment, a MONSTER started materialising in my head. It looked like a number line, but adjacent to it appeared another 'number' line, with elements \\(\alpha , \beta , \gamma , ... \\) succeeding each other just like the normal natural numbers would. This extra 'number line' would violate axiom 2, however. This is because \\(\alpha\\) wouldn't have a successor. To deal with this, I designated \\(\alpha\\) as the successor of \\(\gamma\\), turning my number line into a number *loop* with three elements. THE MONSTER is defined as the set of the 'normal' natural numbers *and* the set \\(\{\alpha , \beta , \gamma \}\\) such that \\(\beta = S(\alpha), \gamma = S(\beta)\\) and \\(\alpha = S(\gamma)\\). THE MONSTER complies with axioms 0, 1, and 2, but does so mischievously. It's clearly not the set we had in mind when we set out to define the 'natural numbers.'

With this MONSTER in mind, we introduce the PMI axiom. Suppose our set of 'natural numbers included a disgusting number circle disconnected from our number line. Then while the hypotheses of PMI could be true for some statement P, the conclusion wouldn't necessarily follow. This is because no matter how many times we jump from 0 to its successor, and *its* successor, and so on, we will never be able to use the hypthesis to say that P(\\(\alpha\\)) is true, since its just not on the same number line. Thus, the monster is banished, and we can safely sleep at night knowing that no circular deformity will disturb our perfect, sequential number line anymore.

### Philosophy of THE MONSTER 

Mathematical MONSTERS are delightful creatures which mischievously comply with the rules of a mathematical object, while obviously defying their intention. Monsters are sometimes annoying objects because they can get in the way of whatever we're trying to do. Our defined or axiomatized system may cease to behave how we want it to. For instance, a statement like 'all natural numbers have property X' may not be true if there are some impostor 'natural numbers' that we merely failed to define out of the category.

As a result, a chronic condition suffered by some mathematicians is the compulsion to expel monsters in search of platonic, perfectly defined mathematical objects. History is filled with meticulous pedants who devoted large parts of their mathematical careers to refining their definitions of object by systematically slaying monster after monster.

The problem with this approach is that each restriction is nothing but an ad-hoc adjustment that slays one *particular* monster, but never all possible monsters in generality. This inevitably leaves the monster-barrer in a perpetual state of uncertainty as to whether their mathematical objects are actually safe from monsters or not. For example, I may have banished the apendage of a circular \\((\alpha,\beta,\gamma)\\) tumour to my beautiful number line, but nothing guarantees me that there isn't *some other* monster waiting in the shadows. I call this state of limbo *the itch.*

On the other side of the political aisle, there exist the natural counterparts to the monster-barrers: those mathematicians who, rather than treating *the itch* as an ailment, see in it an inspiration to create monsters which seek to challenge or invalidate accepted frameworks and results. Karl Weierstrass (1815-1897) was a celebrated creator of monsters. In particular, he is held responsible for the first published[^7] instance of a function which is everywhere continuous but nowhere differentiable. This object challenged the consensus that continuitity implied differentiability at almost all points, even invalidating existing (incorrect) proofs[^10] that had been previously been accepted by the general mathematical community.

History features some legendary struggles between monster-barrers and monster-makers. Some such conflicts are both documented and parodied brilliantly in *Proofs and Refutations by Imre Lakatos,*[^8] which uses fictional dialogues between a teacher and their students to caricature and discuss real characters and debates from mathematical history. I copied the paradigm of dividing mathematicians into monster-barrers and monster-makers from the book, and this whole section is inspired by its critique of these two archetypes.

Unfortunately, as Lakatos' dialogues illustrate, these struggles can be as unproductive as they are amusing. Monster-barrers risk contorting their definitions of objects into increasingly ugly and unintuitive forms, explicitly or implicitly barring a growing, unwieldy list of exceptions and asterrisks. On the other hand, Monster-makers can end up concocting hopelessly convoluted, 'technically correct' monsters whose validity often depends on exploiting, in bad faith, imprecise wording or other technicalities to create repulsive pathological objects.

It's easy to sympathise with the woes of the monster-barrers. As an analogy to their situation, you can imagine sitting down and trying to formally define what a chair is. You might start with: 'a chair is something you can sit down on.' Then, a contrarian comes along and asks you whether a log of wood is a chair, since you can technically sit down on it. You might improve your definition by adding the restriction that a chair needs to have legs, but they might persist by inquiring whether a bed is a chair by your definition. You may then amend your definition anew, but the contrarian will inevitably generate another outrageous counter-example, and so on.  

I can imagine this being very frustrating because we all *know* what a chair is. The contrarian (probably) doesn't actually disagree with you about whether a given object is a chair or not. This makes their contrarianism seem motivated not by a drive for insight, but rather a conviction to annoy you or to appear clever. Such a discussion would be a waste of time indeed! 

Poincaré argues along these lines in his 1907 book[^6], where he discusses and censures Weierstrass' pathological continuous-but-not-differentiable functions. The book laments that some monsters do nothing but prove our mathematical ancestors techically wrong without providing real insight. He writes: "Formerly, when a new function was invented, it was in view of some practical end. Today they are invented on purpose to show our ancestors’ reasonings at fault, and we shall never get anything more than that out of them."

In further support of the monster-barrer's view, there's an undeniable appeal to having a perfectly-defined mathematical object which flawlessely, unambiguously describes exactly what we want it to. Nevertheless, I'm not actually here to take the side of the monster-barrers, but rather to argue *for* the value of monsters and of their use, in good faith, being key to advancing our understanding of math.

### Reframing the itch

I still remember what it was like to first learn about vectors in school. In my head, vectors were little arrows in 2D or 3D space which pointed in a certain direction. I also learned that vectors have a 'magnitude,' which was a way of saying 'how big' the vector was. For quite a while, vectors weren't abstract mathematical objects, but rather very concrete physical things.

Naturally, when I first learned about *vector spaces* in my introductory linear algebra course, I would seek to square the abstract mathematical definitions with my robust-but-limited model of what a vector was. I would sketch 2D or 3D vectors out on a piece of paper and would use all kinds of diagrams illustrating the axioms and properties of *vector spaces* in the physical framework I was already familiar with. 

I worked up my understanding of vectors as generalised mathematical objects by grounding myself in my knowledge of simple, 'physical' vectors. This no doubt helped me get my head around the topic. Moreover, this grounding in physical vectors is faithful to their likely original purpose. Any definition of a *vector space* that excludes the fundamental primary school idea of what a vector is wouldn't be acceptable, because we *do* in part want to describe vectors mathematically with vector spaces.

If the role of vector spaces is to explictly document our intuitive notions of vectors, the strict, committed monster-barrer might express their annoyance that there are so many things that aren't vectors, but *do* qualify as vector spaces. 'Look!' they would say, 'the set of continuous functions defined on \\([0,1]\\) is a vector space, and so is the set of solutions for a linear differential equation; not to *mention* the set of \\(2 \pi \\)-periodic functions over the real numbers. Obviously, we must define these objects out of being vector spaces.'

However, it is precisely here that the ideology of the categorizing monster-barrer reveals its limitations. Vector spaces are some of the most indispensable and omnipresent objects in mathematics precisely *because* they are so generalized. Their power comes exactly from the fact that vectors share their properties with many other objects. Vector spaces create a common, abstracted language in which we can talk about all of these different things at the same time. Seen from this perspective, strict, exclusive definitions limit our scope without enlightening. Conversely, abstraction and generalization are the powerful language through which we learn to say more and think more. [^9]

To return to an early example, the really compelling reason to introduce the Principle of mathematical induction *is not* that we simply can't stand the idea of having an \\((\alpha,\beta,\gamma)\\) system in our natural numbers. Instead, we are motivated by the intuition PMI is a neat, cool property for an object to have. Our goal is not to strictly categorize the natural numbers, but rather to set up a framework where we can meaningfully talk about them. In this light, I can say that the possibility that there might exist another 'monster' somewhere isn't too concerning. My axioms are already powerful enough to tell me a lot about 'the natural numbers' as they are. Crucially, the possibility that my axioms could describe other, unintended objects is at least as much an opportunity as it is a threat.

In conclusion, we reframe *the itch* not as a threat to a world where categories are inherently desirable, but instead as the drive to generalize by connecting concepts with each other - to develop languages through which we can understand many different but related things at once. The intrigue of mathematics lies not in restricting what we can say about the world, but rather from making meaningful connections *between* concepts to build a rich model of the world.

----

[^2]: For an example of this, you can convince yourself that the absolute value function on the real number, \\(|x|\\), is continuous at 0, but that it's hard to meaningfully assign it a slope at 0.

[^6]: [Science and method, 1908 Poincaré (1914 translation). Page 125.](https://archive.org/details/b21974123/page/124/mode/2up)

[^7]: [weierstrass original paper (german) with the pathological function defined](https://books.google.com/books?id=1FhtAAAAMAAJ&pg=PA71). According to [wikipedia](https://en.wikipedia.org/wiki/Weierstrass_function#cite_ref-1), Weierstrass wasn't the first to concoct such a MONSTER, but he is the first known to have published a complete, proven example.

[^8]: Lakatos, Imre, Proofs and Refutations: The Logic of Mathematical Discovery. 1976.

[^9]: To paraphrase a mathematician I know: math is all about learning that there's an even more generalized vesion of the last generalization you managed to wrap your head around.

[^10]: The original false proof is attributed to Ampère in 'Recherches sur quelques points de la théorie des fonctions dérivées etc', published in 1806.