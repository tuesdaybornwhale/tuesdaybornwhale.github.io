---
title: "Monsters_directors_cut"
date: 2024-02-17T20:58:34+01:00
draft: true
---

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