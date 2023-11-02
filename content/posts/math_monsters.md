---
title: "Making Mathematical MONSTERS"
date: 2023-09-11T16:54:54+02:00
draft: true
---
{{< math_post >}}

## Introduction

Suppose you encounter, on your merry mathematical way, an object such as a cool theorem, or a formal definition of a object (such as the natural numbers)

You might back sit and marvel at the beauty of the object, or investigate its elegant corollaries and its real-world applications. You may, on the other hand be tempted to test the fragility of the object.

### Example: axiomatizing natural numbers

In math, we often start out by defining objects whose existence and properties seem obvious and common place. For example, many introductory university level courses will go out of their way to define the natural numbers. As mundane as it seems, I like the mental motion of formalizing such obvious objects. Every time I do it, I realize how much I know about natural numbers, without even knowing I know it! The process exposes to me how much of my world-view is just implictly baked into my sub-conscious.

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

Mathematical MONSTERS are delightful creatures which mischievously comply with the rules of a mathematical object, while obviously defying their intention. Monsters are sometimes annoying objects that get in the way of whatever we're trying to do. Our defined or axiomatized system may cease to behave how we want it to, or the conclusion of our theorem may no longer be true. Secretly, however, MONSTERS are actually our helpers. 

<!--- 
When I couldn't understand why the induction axiom was needed for the natural numbers, removing it birthed a MONSTER which helped me realize why the axiom was there in the first place. 
-->

In this post we'll go over various types of monstrous companions which help us think about math.

### Chesterton's axiom

One principle I find helpful for thinking about systematic change is *Chesterton's fence.* Suppose you happen upon a fence in a field. It appears to have no purpose, so you may consider simply removing the useless fence. However, Chesterton's argument suggests that you shoud be careful about removing seemingly useless fences in seemingly innocent fields. After all, someone put up that fence with a reason in mind. For all you know, the fence could be protecting the owner's crops from wildlife, or containing an angry bull. Chesterton concluded that unless you understand why a fence was put up in the first place, removing it is a risky business.

With this in mind, I'll introduce our first type of helpful MONSTER. In our analogy, the axioms for an object or the hypotheses for a theorem are fences. The MONSTER is the angry bull that impales us with its horns after we foolishly remove part of a fence. In our thought experiment, we can remove the fence and intenionally seek out the bull. Once we find it in our mind's eye and have been metaphorically impaled, we can mentally restore the fence with no harm done.

By finding this angry bull, we hope to figure out why our fence was there in the first place, and gain a new understanding and appreciation for the intricacies of what we're thinking about.

My opening example for this post was an instance of Chesterton's axiom. The fact that the number line is, well... a line was drilled so deep in my psyche that I didn't remember I need to write it down! In fact, in an alternative world, I could have eaten up a definition of the naturals which includes ony axioms 0, 1 and 2, without realizing it's incomplete.

In the end, only the thought experiment of removing PMI gave me that 'aha' moment that I actually hadn't finished describing what I was trying to describe. The MONSTER helped me unlock a greater understanding of a very fundamental object, and also a better understanding of what kinds of important gems are buried in my subconscious. I think that's pretty cool.

### Contrarians

Often, if you want to prove a statement false, you can start by assuming it is true. This is useful because sometimes, there's a monster lurking in the shadows that will help you make the statement's absurdness obvious.

#### Example: The square root of two is irrational

One property of fractions is that you can always reduce them to the lowest term, such that the numerator and the denominator have no common factors. For example, since 6 and 4 are both divisible by 2, then \\(\frac{4}{6} = \frac{2}{3}\\). We're going to assume that the square root of two can be written as such a quotient that is in lowest terms. Then we'll show that this quotient is a MONSTER. The reason it's monster is broadly that once we square both sides of the equation \\(\sqrt[]2 = \frac{p}{q} \\), we can abuse the fact that p or q are even if and only if their squares are even to show that both p *and* q are suspiciously even. This would mean that our fraction is both in lowest terms and not in lowest terms (as you could divide both p and q by 2 to reduce the fraction), making it a MONSTER. Intuitively, the equation \\(2 = \frac{p^2}{q^2}\\) smells suspiciously like there are some even numbers hidden inside, so it is there that we look for our MONSTER.

*Proof:*

Suppose that the square root of two is rational. Then, we could find integers p and q such that \\(\sqrt[]2 = \frac{p}{q} \\). We can also reduce this fraction until p and q have no common divisors. Because p and q have no common divisors, they both cannot be even.

Since \\(\sqrt[]2 = \frac{p}{q} \\), then \\(2 = \frac{p^2}{q^2}\\), which means that \\(2q^2 = p^2\\). This means that \\(p^2\\) must be an even number, but therefore p must be an even number. This means that we could write p as \\(p=2k\\), where k is some integer. Therefore: \\(2q^2 = (2k)^2 = 4k^2\\), now we can divide both sides by two to see that \\(q^2 = 2k^2\\), so therefore q is even. Now that we've shown that q and p are even, our MONSTER rears its head! Since they have a common factor of two, we could always reduce the fraction \\(\frac{p}{q}\\) by dividing both sides by two. On the other hand, we already previously assumed that \\(\frac{p}{q}\\) couldn't be reduced anymore, so our fraction has two contradicting properties.  \\(\blacksquare\\).

----

Another way you may come accross a contrarian is revealed by the way logical connectors. (insert analysis proof around closeness)

### New objects

Sometimes, MONSTERS appear to be joyless mathematical objects that merely get in the way of what we are trying to do. However, they can sometimes surprise us by evolving to yield perspectives and applications that we would never have expected were there at all! Let's look at an example.

In the 18th and 17th centuries, many notions in calculus were defined more intuitively and less logically than they are today. Newton and Leibniz originated many of calculus' intuitive fundamentals, but they were fuzzy on the details - especially around infinitesimals and limits. What exactly went on with functions and limits as things got 'infinitely small' was reputedly not very well defined. 

Karl Weierstrass (1815-1897) is known for formalizing many of those fuzzy concepts and helping calculus become less hand-wavy. His use of unambiguous logical connectors and precise statments is remembered fondly as contributing to a paradigmic shift in math which helped its progress. It is also remembered less fondly for divorcing calculus from the intuitions of a tangible world, burying the real-world motivation for calculus in an intimidating, unintuitive language.

One of his most revolutionary contributions[^7] involved upending mathematicians' intuitions of continuity, differentiability, and the relationship between them. 

Previously, consensus dictated that every continuous function was also differentiable at all but a countably infinite number of points. Intuitively, while a continuous function can[^2] have some jagged points where the derivative isn't defined, it will be 'smooth' nearly[^4] all the time. Pioneers like Newton had developed calculus with well-behaved physical objects in mind, such as the apocryphal apple falling from a tree or the movement of planetary bodies. Most phenomena in mechanics are indeed modelled by nice functions that are clearly both continuous and differentiable. As such, it was considered natural that continuous functions were fundamentally smooth. 

Weiestrass' pathological function and others like it have had a profound impact on the way we think about continuous and differentiable functions, and eventually the natural world. While the response of mathematicians of the day was *probably* not as hostile as [wikipedia would suggest]({{< ref "wikipedia_shenanigans" >}}), it is true that some mathematicians like Poincaré did see it as an annoying technicality[^6]. According to him, it proved mathematicians wrong without really adding to our understanding of the meaningful physical world through math.

The happy ending to this story is that the gloomy future Poincaré predicted did not come to pass. These MONSTERS were born as pesky abstract contrarians, but they soon found rich applications in physics and other fields. Their study has branched out into many diverse mathematical field, as it has been found that many physical and social phenomena can best be modelled with such pathologically behaved curves. I don't understand these applications myself, but I'll trust the general consensus that many fractal-like phenomena exist. Example include Brownian motion in physics, the structure of cells in biology, and even the behaviour of markets under certain conditions in economics!

I find this a touching example of a class of MONSTERS which was in danger of being rejected, but found its way to help us anyway. Originally considered by at least some as an ugly freak of logic with no relationship to the real world, these MONSTERS became an important part of how we understand some parts of reality.

----

## Conclusion


----

[^1]: The Peano axioms, as they are called, are usually presented more formally attempting to properly define things like equality between elements of the set of natural numbers and what the successor functiton is. You can even get into what it means for something to be true if you're really picky. Given in this post is a simplified version so you get the gist without getting lost in the detail

[^2]: For an example of this, you can convince yourself that the absolute value function on the real number, \\(|x|\\), is continuous at 0, but that it's hard to meaningfully assign it a slope at 0.

[^4]: formally, nearly all the time means for all except a countably infinite amount of points.

[^6]: [Science and method, 1908 Poincaré (1914 translation). Page 125.](https://archive.org/details/b21974123/page/124/mode/2up)

[^7]: [weierstrass original paper (german) with the pathological function defined](https://books.google.com/books?id=1FhtAAAAMAAJ&pg=PA71). It's worth noting that Weierstrass wasn't the first to concoct such a MONSTER, but he is the first known to have published a complete, proven example.

