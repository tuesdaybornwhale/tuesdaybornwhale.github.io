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

#### Examples



### New objects

In the 18th and 17th centuries, many notions in calculus were defined more intuitively and less logically than they are today. While pioneers like Newton and Leibniz originated many of calculus' intuitive fundamentals, they were fuzzy on the details - especially around infinitesimals and limits. What exactly went on with functions and limits as things got 'infinitely small' was reputedly not very well defined. 

Weierstrass is well-known for 


. Weierstrass is known for formalizing many of those fuzzy concepts and helping induce a reformation of calculus to be more rigorous and formal.

One of 

[interesting article about Weierstrass' monster](https://nautil.us/maths-beautiful-monsters-234859/)

[weierstrass OG paper (german) with fractal function defined](https://books.google.com/books?id=1FhtAAAAMAAJ&pg=PA71)

[Poincaré roasting monsters 125](https://archive.org/details/b21974123/page/124/mode/2up)

[hermite also roasting weierstrass 318](https://archive.org/details/correspondanced01bourgoog/page/n335/mode/2up)

Sometimes, finding mat

- fractals (functions that are everywhere continuous but never differentiable)

- completing rational numbers into a set that contains all the limits of its sequences.

### Contrarians

- proofs by contradiction (think of some)

[^1]: The Peano axioms, as they are called, are usually presented more formally attempting to properly define things like equality between elements of the set of natural numbers and what the successor functiton is. You can even get into what it means for something to be true if you're really picky. Given in this post is a simplified version so you get the gist without getting lost in the detail