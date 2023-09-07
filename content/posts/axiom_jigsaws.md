---
title: "Axiomatic jigsaw puzzles"
date: 2023-09-06T20:58:03+02:00
layout: math_post
draft: true
---

{{< math_post >}}

## Intro
I recently came across the 'Foundations of the Theory of Probability,' a 1933 paper by A.N. Kolmogorov which outlines the 'canonical' formalization of probability theory which we know(?) and love(?) today. I took a probability course last semester and expected the content to be very similar. It was therefore surprising and delightful to find that the foundational axioms given by Kolmogorov are *substantively* different from the ones I am used to.

In this post I analyze the subtly fascinating differences between these axiomatizations. I take apart the systems by removing and adding axioms to understand what role they have in the system. The goal ultimately is to understand the reasoning and historical context behind different choices of axioms, and to see how different jigsaw pieces come together to make more or less the same image of probability theory.

## The axioms

### What are these axioms trying to do?

Before we go into the formal axioms, it would behoove us to reflect shortly on what these axioms are actually *for* and what exactly we want to formalize.

Probabilities are our way of describing and dealing with uncertainties in the world. Colloquially, an event having probability 1 is the same as saying that its virtually certain, whereas an event having probability 0 is math-speak for saying that we can go about our lives more or less assuming it won't happen. For everything else, we assign a number between zero and one that tries to convey the 'likelihood' that it will happen. What exactly this likelihood means is an ever-enduring philosophical debate that we won't go into in this post.

In short, what our brains are doing when we think of probabilities is mapping certain events onto certain numbers. Math actually has a name for that: probabilities are just functions! What's left to do in our axioms is to describe these functions a little more concretely. Namely, we'd like to know what the inputs and outputs actually are, as well as any important rules our probability function should follow in order that it behave the ways probabilities in our heads do.

On the output side, this is pretty easy: our function should always spit out a number between zero and one. Moreover, the proability that *something* happens when we run an experiment (e.g. throwing a die) is 1, and the probability that nothing happens is 0. What we want out of our inputs is a bit harder to formalize, but essentially we want to be able to manipulate these inputs by taking their intersection, union, etc... and still be able to meaningfully assign a probability to the resulting event. For example, if we throw a six-sided die, we might not just want to be able to describe what the probability of rolling a six is, we might also want to know what the probability of rolling an even number is; that's the same as asking what the probability that the die lands on a 2, 4 or 6, which set-theoretically speaking is the same as asking whether it lands on \\(\\{2\\} \cup \\{4\\} \cup \\{6\\}\\). 

Fortunately, there exist objects in set theory that have these properties, and we will use these objects as the domains for our function. One of the really clever things Kolmogorov did in his paper was recycle these already-existing concepts in set theory and measure theory for his axioms, instead of going the scenic route by reinventing the wheel himself.

Finally, there's some properties that our probability function should really have. Suppose that there are two  events which are *mutually exclusive*, that is to say that one happening means the other cannot. For example, 'the die rolled an even number' and 'the die rolled an odd number' are mutually exclusive. The probability that one of these two events happens should be the sum of the probabilities that each one of them happens.
 
There are many other properties we would like our function to have, such as the probability of A should be one minus the probability of 'not A.' Fortunately, these properties can be derived from the properties we had already stated above. Ideally, our axiomatic system should be simple, minimalistic and assume as few things as are necessary.

### Kolmogorov's axioms

----

Let E be a collection of elements \\(\xi\\), \\(\eta\\), \\(\zeta\\),..., which we shall call elementary events, and F a set of subsets of E ; the elements of the set F will be called random events.

1. F is a field of sets
2. F contains the set E
3. To each set A in F is assigned a non-negative real number \\(\mathbb{P}[A]\\). This number \\(\mathbb{P}[A]\\) is called the probability of the event A.
4. \\(\mathbb{P}[E] = 1\\)
5. If A and B have no element in common, then \\(\mathbb{P}[A] + \mathbb{P}[B] = \mathbb{P}[A \cup B]\\)

The system of sets F, together with the definite assignment of the numbers \\(\\mathbb{P}[A]\\) satisfying these axioms 1-5, is called a field of probability.

-----

In the first paragraph and the first two axioms, Kolmogorov takes care of our input set. E is the set of events that could happen in the world following some experiment like the roll of a die. In that case, \\(E=\\{1,2,3,4,5,6\\}\\). F is a subset of the power set of E, which means in our example that it could contain elements such as \\(\\{1\\}, \\{3\\}, \\{1,3\\}\\), \\(\\{1,2,3,4\\}\\), or E. We are interested in assigning probabilities to members of F rather than members of E. This is becuase we might be just as excited to discuss, for example, what the probability of a die landing a prime or an even number as the probability of it landing a specific number. Importantly, F is assumed to be a field, which means we can happily operate on the sets in F and be assured that the result is actually still in F and therefore has a probability assigned to it. For example, if \\(\\{1\\} \\in F \\space and \\space \\{3\\} \\in F\\), then \\(\\{1,3\\}\\in F\\). 

The next three axioms outline the features of our function \\(\mathbb{P}\\). Elegantly, these three simple claims allow us to deduce many of the features of probabilities that we would like to be true. You can try and prove some yourself or check the proofs on wikipedia.

From my perspective ninety years in the future, there were several pieces of this system that surprised me. the first odd thing was that axiom 5 only makes claims about pairwise unions of sets, whereas my cached version of the axiom made a claim about infinite sums. The second, even more eye-catching thing was that E was assumed to be a *finite* set. This contrasts the modern formulation I'm familiar with, where no claim is made as to the size of E. Of course, this second anomaly explains the first, as one doesn't need to worry about infinite unions when dealing with a finite set.

Kolmogorov acknowledges the incompleteness of this system, and claims that in order to properly define a field of probability over an infinite set E, one needs a supplementary sixth axiom. This really turned my head because the modern formalization doesn't need any additional


### A more modern presentation of the axioms

------
Let \\((\Omega, \sigma\\)) be a measurable space. A probability measure is a total function \\(\mathbb{P}:\sigma \rightarrow \mathbb{R} \\) such that:

1. \\(\forall A \in \sigma, \space \mathbb{P}[A]\geq 0\\)
2. \\(\mathbb{P}[\Omega] = 1\\)
3. \\(\mathbb{P}[\bigcup_{n=1}^{\infty}A_n]=\sum_{n=1}^{\infty}\mathbb{P}[A_n]\\) for a sequence \\((A_n)_{n \geq 1}\\) of sets in \\(\sigma\\)
------

