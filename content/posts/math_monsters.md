---
title: "Making Mathematical MONSTERS"
date: 2023-09-11T16:54:54+02:00
draft: true
---
{{< math_post >}}

## Introduction

Suppose you encounter, on your merry mathematical way, an object such as:
- a system of axioms for an object such as the natural numbers or probabilities
- a theorem with a few preconditions which satisfy a cool result
- a definition for a satisfying object such as the limit 

You might back sit and marvel at the beauty of the object, or investigate its elegant corollaries and its real-world applications. You may, on the other hand be tempted to test the fragility of the object.

### Example: axiomatizing natural numbers

Many introductory university level courses will give you a definition of the natural numbers that goes something like this[^1]:

____

The natural numbers are a set of objects which satisfy the following axioms:

0. 0 is a natural number (if you'd rather make 1 the first natural number, pretend 0 is just a funny name for 1)

1. each natural number n has exactly one successor, S(n)

2. each natural number has exactly one predecessor, except for zero which has no successor.

3. (Principle of Mathematical Induction) suppose that a certain statment P is true of 0, and that for any number n, P(n) implies P(S(n)). Then, P is true for all natural numbers.

____

The first time I read through these axioms, I was confused by the Principle of Mathematical Induction (PMI) axiom. I frowned to myself that PMI seems to be formalizing something that is already quite obvious - aren't proofs by induction already rigorous all on their own?

Months later, I tried taking out the PMI axiom to see what would happen to my set of
'natural numbers.' Initially, nothing seemed off at all. 0 is still the first natural numbers. Natural numbers still follow and preceed each other just as one would expect them to. 'the number line behaves just like it should,' I thought. 

But hold on... why is it **the only** number line?
 
In that moment, a MONSTER started materialising in my head. It looked like a number line, but adjacent to it appeared another 'number' line, with elements \\(\alpha , \beta , \gamma , ... \\) succeeding each other just like the normal natural numbers would. This extra 'number line' would violate axiom 2, however. This is because \\(\alpha\\) wouldn't have a successor. With this in mind, I designated \\(\alpha\\) as the successor of \\(\gamma\\), turing my number line into a number *loop* with three elements. THE MONSTER is defined as the set of the 'normal' natural numbers *and* the set \\(\{\alpha , \beta , \gamma \}\\) such that \\(\beta = S(\alpha), \gamma = S(\beta)\\) and \\(\alpha = S(\gamma)\\). THE MONSTER complies with axioms 0, 1, and 2, but does so mischievously. It's clearly not the set we had in mind when we set out to define the 'natural numbers.'

With this MONSTER in mind, we introduce the PMI axiom. Suppose our set of 'natural numbers included a disgusting number circle disconnected from our number line. Then while the hypotheses of PMI could be true for some statement P, the conclusion wouldn't necessarily follow. This is because no matter how many times we jump from 0 to its successor, and *its* successor, and so on, we will never be able to use the hypthesis to say that P(\\(\alpha\\)) is true, since its just not on the same number line. Thus, the monster is banished, and we can safely sleep at night knowing that no circular deformity will disturb our perfect, sequential number line anymore.

### Philosophy of THE MONSTER

Mathematical MONSTERS are delightful creatures which mischievously comply with the rules of a mathematical object, while obviously defying their intention. Monsters are sometimes annoying objects that get in the way of whatever we're trying to do. Our defined or axiomatized system may cease to behave how we want it to, or the conclusion of our theorem may no longer be true. Secretly, however, MONSTERS are actually our helpers. 

<!--- 
When I couldn't understand why the induction axiom was needed for the natural numbers, removing it birthed a MONSTER which helped me realize why the axiom was there in the first place. 
-->

In this post we'll go over various types of monstrous companions which help us think about math.

### Chesterton's axiom

One principle I find helpful for thinking about systematic change is *Chesterton's fence.* Suppose you happen upon a fence in a field. It appears to have no purpose, so you may consider simply removing the useless fence. However, Chesterton's argument suggests that you shoud be careful about removing seemingly useless fences in seemingly innocent fields. After all, someone put up that fence with a reason in mind. For all you know, the fence could be protecting the owner's crops from wildlife, or containing an angry bull. Chesterton concluded that unless you understand why a fence was put up in the first place, removing it is a risky business.

With this in mind, I'll introduce our first type of helpful MONSTER. In our analogy, the axioms for an object or the hypotheses for a theorem are fences. The MONSTER is the angry bull that impales us with its horns after we foolishly remove part of a fence. In our thought experiment, we can remove the fence and intenionally seek out the bull. Once we find it in our mind's eye and have been metaphorically impaled, we can mentally restore the fence with no harm done.

By finding this angry bull, we hope to figure out why our fence was there in the first place, and gain a new understanding and appreciation for our system.

My opening example for this post was an instance of Chesterton's axiom. When I couldn't understand why PMI was a necessary axiom for the natural numbers, the thought experiment of removing it helped me understand the purpose it serves. Here are some more of my favourite examples...

#### Examples (maybe will make some if I'm not lazy)



### New objects

In the 18th and 17th centuries, many notions in calculus were defined more intuitively and less logically than they are today. Newton and Leibniz originated many of calculus' intuitive fundamentals, but they were fuzzy on the details - especially around infinitesimals and limits. What exactly went on with functions and limits as things got 'infinitely small' was reputedly not very well defined. 

Karl Weierstrass (1815-1897) is known for formalizing many of those fuzzy concepts and helping calculus become less hand-wavy. One of his most revolutionary contributions[^7] involved upending mathematicians' intuitions of continuity, differentiability, and the relationship between them. 

Previously, the consensus was that every continuous function was also differentiable at all but a countably infinite number of points. Intuitively, while a continuous function can[^2] have some jagged points where the derivative isn't defined, it will be 'smooth' nearly[^4] all the time. This set the stage for Weierstrass to publish[^7] a function which was everywhere continuous, but nowhere differentiable. This idea challenged not just the state-of-the-art in mathematics at the time, but also the intuitive foundations upon which Calculus had been built. Pioneers like Newton had invented calculus with well-behaved physical objects in mind, such as the apocryphal apple falling from a tree or the movement of planetary bodies. Most phenomena in mechanics are modelled by nice functions that are clearly both continuous and differentiable. As such, it was considered natural that continuous functions were fundamentally smooth. 

As such, Weiestrass' pathological function and others like have had a profound impact on the way we think about continuous and differentiable functions, and eventually the natural world. Wikipedia's page on the function will sentationally quote Poincaré calling such functions 'monsters' and Weierstrass' work 'an affront to common sense.' It will also paraphrase Hermite calling them a 'lamentable scourge.' These citations make Weierstrass' contemporaries seem like close-minded traditionalists that saw his mathematical discoveries as heresy. I was therefore disappointed when I actually sought out the primary sources[^5] [^6], and found both mathematicians were taken rather out of context. The mathematical beef was not quite as juicy as I had been led to believe!

The Hermite quote comes from his correspondence with Steltjes. In his letter, Hermite was discussing one such function, and apparently found a humorous way of expressing his annoyance at its problematic properties. Hermite's language does, however, suggest that such functions made math significantly more confusing for him!

I was unable to track Poincaré's 'affront to common sense' quote to a primary source. The trail ran cold at the citationless blogpost that wikipedia sloppily referenced. I was, however, able to find the 'monster' quote in a book Poincaré published on the scientific method in 1899. The quote hails from the chapter 'Definitions and Educations' which is a highly thoughtful piece of mathematical philosophy that I strongly recommend. In it, Poincaré explicitly praises Weierstrass' logical formalizations of analysis. He acknowledges that many results that were considered true weren't formalized explictly enough to prove them properly. While many of them had turned out to be true, many were instead shown not to be once they were stated clearly and examined more closely. Formal logic had, no doubt, helped mathematics advance in many ways.

At the same time, Poincaré laments the loss of intuition that comes with formalizing mathematics. 

Firstly, he discusses the challenge of teaching formal math to students, as opposed to pedagogy based on intuition. I strongly related to this point, as it brought me back to the most daunting summit of my early university studies. Modern Analysis texbooks and other materials often employ a dry, joyless style of communication. They make heavy use of the logician's definitions and proofs that Weierstrass helped become the convention. While the best materials will bring the inanimate logic to life with vivid geometric or real-world intuitions, many will leave this vital task as an exercise to the reader. As such, much of my time in early university was spent trying to weave the incomplete threads of intuition I would get into a narrative I could relate to something that felt tangible and real.

In short, Poincaré argues that an 'intuitionist's' approach, grounded in the real world, is absolutely vital in math communication - even if it's not the most rigourous. Furthermore, he says that an approach based on intuition is needed not just for pupils, but also for their teachers. He suggests that the pure logician's perspective on math is in some sense limited. They are surely able to prove many results and expand the bounds of knowledge. However, the logical connectors and syllogisms they use only give us a view of the small moving parts of a system. It's only when we zoom out and look at the whole that we understand what this logic means for the physical world we inhabit. While we can prove many results with logic and formalism, it is only with intuition and a feel for math's relationship to the world that we know which results we want to prove. To quote Poincaré:

'Logic teaches us that on such and such a road we are sure of not meeting an obstacle, but it does not tell us which is the road that leads to the desired end.'

This context is what gives rise Poincarés use of MONSTER[^8] to describe objects like the Weierstrass function. Poincaré was clearly not disputing either the correctness or the relevance of logical mathematics. Instead, he was acknowledging its importance while reminding us of the intuitively repugnant conclusions implied by such a MONSTER. It was hard to reconcile such an object with the intuitionist, physical roots of calculus. 



Nevertheless, Poincaré did err in that he thought that the Weierstrass function and others like it strayed too far from reality and too . It led us to question, reexamine and reflect on the meaning of continuity and differentiability. Happily, Poincaré's reflections on how such MONSTERS can be reconciled with our intuitions of the world also saw some closure in the coming century. 


[interesting article about Weierstrass' monster](`https://nautil.us/maths-beautiful-monsters-234859/)`


### Contrarians

- proofs by contradiction (think of some)

[^1]: The Peano axioms, as they are called, are usually presented more formally attempting to properly define things like equality between elements of the set of natural numbers and what the successor functiton is. You can even get into what it means for something to be true if you're really picky. Given in this post is a simplified version so you get the gist without getting lost in the detail

[^2]: For an example of this, you can convince yourself that the absolute value function on the real number, \\(|x|\\), is continuous at 0, but that it's hard to meaningfully assign a slope to the function at 0.


[^4]: formally, nearly all the time means for all except a finite, or depending on the context, infite but countable number of points. In this case, we would rather mean coutable, as its easy to compose a function that is everywhere continuous, but isn't differentiable at at a countable number of points. One such example is: \\(f: \mathbb{R} \rightarrow \mathbb{R} : f(x) = (\lvert x \rvert - \lfloor \lvert x \rvert \rfloor)\_{\mathbb{I}(2 \mid \lfloor x \rfloor)} +  (- \lvert x \rvert + \lfloor \lvert x \rvert \rfloor + 1)\_{\mathbb{I}(2 (\neg \mid) \lfloor x \rfloor}) \\) It is everywhere continuous but not differentiable at any of the integers.


[^5]: [Hermite's letters with Steltjes, page 318](https://archive.org/details/correspondanced01bourgoog/page/n335/mode/2up)

[^6]: [Science and method, 1908 Poincaré (1914 translation). Page 125.](https://archive.org/details/b21974123/page/124/mode/2up)

[^7]: [weierstrass original paper (german) with the pathological function defined](https://books.google.com/books?id=1FhtAAAAMAAJ&pg=PA71). It's worth noting that Weierstrass wasn't the first to concoct such a MONSTER, but he is the first known to have published a complete, proven example.

[^8]: As is often the case, one is sometimes enamoured by an original mathematical idea, only to find that someone else had already had the idea before. Not only had someone used the term 'monster' before, I'm over a century late to the party!

note: weierstrass function was probably publicly announced in 1872 but not published until 1895