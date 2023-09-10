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

Let \\(\Omega\\) be a collection of elements \\(\xi\\), \\(\eta\\), \\(\zeta\\),..., which we shall call elementary events, and \\(\sigma\\) a set of subsets of \\(\Omega\\) ; the elements of the set \\(\sigma\\) will be called random events.

1. \\(\sigma\\) is a field of sets
2. \\(\sigma\\) contains the set \\(\Omega\\)
3. To each set A in \\(\sigma\\) is assigned a non-negative real number \\(\mathbb{P}[A]\\). This number \\(\mathbb{P}[A]\\) is called the probability of the event A.
4. \\(\mathbb{P}[\Omega] = 1\\)
5. If A and B have no element in common, then \\(\mathbb{P}[A] + \mathbb{P}[B] = \mathbb{P}[A \cup B]\\)

The system of sets \\(\sigma\\), together with the definite assignment of the numbers \\(\\mathbb{P}[A]\\) satisfying these axioms 1-5, is called a field of probability.

-----

In the first paragraph and the first two axioms, Kolmogorov takes care of our input set. \\(\Omega\\) is the set of events that could happen in the world following some experiment like the roll of a die. In that case, \\(\Omega=\\{1,2,3,4,5,6\\}\\). \\(\sigma\\) is a subset of the power set of \\(\Omega\\), which means in our example that it could contain elements such as \\(\\{1\\}, \\{3\\}, \\{1,3\\}\\), \\(\\{1,2,3,4\\}\\), or \\(\Omega\\) itself. We are interested in assigning probabilities to members of \\(\sigma\\) rather than members of \\(\Omega\\). This is becuase we might be just as excited to discuss, for example, what the probability of a die landing a prime or an even number as the probability of it landing a specific number. Importantly, \\(\sigma\\) is assumed to be a field, which means we can happily operate on the sets in \\(\sigma\\) and be assured that the result is actually still in \\(\sigma\\) and therefore has a probability assigned to it. For example, if \\(\\{1\\} \\in \sigma \\space and \\space \\{3\\} \\in \sigma\\), then \\(\\{1,3\\}\\in \sigma\\). 

The next three axioms outline the features of our function \\(\mathbb{P}\\). Elegantly, these three simple claims allow us to deduce many of the features of probabilities that we would like to be true. You can try and prove some yourself or check the proofs on wikipedia.

From my perspective ninety years in the future, there were several pieces of this system that surprised me. Firstly, axiom 5 only makes claims about pairwise unions of sets, whereas my cached version of the axiom made a claim about infinite sums. Secondly, \\(\sigma\\) is a field, whereas I am used to it being a Borel field a.k.a a \\(\sigma\\)-algebra. \\(\sigma\\)-algebras are meaningfully different from fields because the first are closed by infinite unions, whereas the last aren't. Finally and most eye-catching of all, \\(\Omega\\) is assumed to be a *finite* set. This contrasts the modern formulation I'm familiar with, where no claim is made as to the size of \\(\Omega\\). The third anomaly actually explains the first two, as one doesn't need to worry about infinite unions when dealing with a finite set.

Kolmogorov acknowledges the incompleteness of this system, and claims that in order to properly define a field of probability over an infinite set \\(\Omega\\), one needs a supplementary sixth axiom. This really turned my head because the modern formalization doesn't use any additional axioms to feel like it properly dealt with infinite sets...

### A more modern presentation of the axioms

------
Let \\((\Omega, \sigma\\)) be a measurable space. A probability measure is a total function \\(\mathbb{P}:\sigma \rightarrow \mathbb{R} \\) such that:

1. \\(\forall A \in \sigma, \space \mathbb{P}[A]\geq 0\\)
2. \\(\mathbb{P}[\Omega] = 1\\)
3. (additivity) \\(\mathbb{P}[\bigcup_{n=1}^{\infty}A_n]=\sum_{n=1}^{\infty}\mathbb{P}[A_n]\\) for a sequence \\((A_n)_{n \geq 1}\\) of sets in \\(\sigma\\)

For a \\(\mathbb{P}\\) satisfying these axioms, we call \\((\Omega, \sigma, \mathbb{P})\\) a probability space.

------

One may notice that the first two axioms in Kolgomorov's text got eaten up by the first paragraph of our new presentation. This is, I suspect, an amusing effect of the inexorable progress of time. Information and concepts that have proven repeatedly useful get squished and compressed into ever more deformed shorthands. Over time, the information that \\(\Omega\\) is a set and that \\(\sigma\\) is a \\(\sigma\\)-algebra over that set got flattened into '\\((\Omega, \sigma\\)) is a measurable space.'

The more substantive difference here is that Swan tries to directly define probabilities for sets that are not necessarily finite, without the use of an auxilliary axiom. It does this by making \\(\sigma\\) closed under infinite unions as well as finite ones, and secondly by defining the additivity axiom for infinite unions. The question this post seeks to answer next is what is the hole, inconsistency or pathological example that these modifications are undoubtedly papering over. Moreover, how did Kolmogorov deal with this hole and why did he choose to add a sixth axiom instead of modifying the first five until no holes were left.

## The Mysterious sixth axiom

------
6. For a decreasing sequence of events \
\\(A_1 \supset A_2 \supset ... \supset A_n \supset ...\\) of \\(sigma\\) for which \\(\bigcap_{n=1}^{\infty}A_n = \emptyset \\) \
the following equation holds: 
\\(\lim{n \to \infty} \mathbb{P}[A_n] = 0\\)

------