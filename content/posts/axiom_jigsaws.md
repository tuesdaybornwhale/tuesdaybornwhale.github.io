---
title: "Axiomatic jigsaw puzzles"
date: 2023-09-06T20:58:03+02:00
layout: math_post
draft: true
---

 {{< math_post >}}

 *'Anytime someone finds a problem with your axioms, you just say "oh, but of course that's not what I meant," and you change the axioms.'* - Yvik Swan, professor @ ULB

## Intro
I recently came across the ['Foundations of the Theory of Probability,'](https://archive.org/details/kolmogorov_202112) a 1933 paper by A.N. Kolmogorov which outlines the 'canonical' formalization of probability theory which we know(?) and love(?) today. I took a probability course last semester and expected the content of Kolmogorov's paper to be very similar to what I had learned. It was therefore surprising and delightful to find that the foundational axioms given by Kolmogorov are *substantively* different from the ones I am used to.

In this post I analyze the subtly fascinating differences between these axiomatizations. I take apart the systems by examining the role each axiom is fulfilling. The goal ultimately is to understand the reasoning and historical context behind different choices of axioms, and to see how different jigsaw pieces come together to make more or less the same image of probability theory.

## The axioms

### What are these axioms trying to do?

Before we go into the formal axioms, it would behoove us to reflect shortly on what these axioms are actually *for* and what exactly we want to formalize.

Probabilities are our way of describing and dealing with uncertainty in the world. Colloquially, an event having probability 1 is the same as saying that its virtually certain, whereas an event having probability 0[^1] is math-speak for saying that we can go about our lives more or less assuming it won't happen. For everything else, we assign a number between zero and one that tries to convey the 'likelihood' that it will happen. What exactly this likelihood means is an ever-enduring philosophical debate that we won't go into in this post.

In short, what our brains are doing when we think of probabilities is mapping certain events onto certain unique numbers. Math actually has a name for that: probabilities are just functions! What's left to do in our axioms is to describe these functions a little more concretely. Namely, we'd like to know what the inputs and outputs actually are, as well as any important rules our probability functions should follow in order that they behave the ways probabilities in our heads do.

On the output side, this is pretty easy: a probability function should always spit out a number between zero and one. Moreover, the probability that *something* happens when we run an experiment (e.g. throwing a die) is 1, and the probability that nothing happens is 0. What we want out of our inputs is a bit harder to formalize, but essentially we want to be able to manipulate these inputs by taking their intersection, union, etc... and still be able to meaningfully assign a probability to the resulting event. For example, if we throw a six-sided die, we might not just want to be able to describe what the probability of rolling a six is, we might also want to know what the probability of rolling an even number is; that's the same as asking what the probability that the die lands on a 2, 4 or 6, which set-theoretically speaking is the same as asking whether it lands on $$ {2} \cup {4} \cup {6} $$ 

Fortunately, there exist objects in set theory that have these properties, and we will use these objects as the domains for our function. One of the really clever things Kolmogorov did in his paper was recycle these already-existing concepts in set theory and measure theory for his axioms, instead of going the scenic route by reinventing the wheel himself.

Finally, there's some properties that a probability function should really have. Suppose that there are two  events which are *mutually exclusive*, that is to say that one happening means the other cannot. For example, 'the die rolled an even number' and 'the die rolled an odd number' are mutually exclusive. The probability that one of these two events happens should be the sum of the probabilities that each one of them happens.
 
There are many other properties we would like our function to have, such as the probability of A should be one minus the probability of 'not A.' Fortunately, many of these properties can be derived from the properties we had already stated above, so we won't have to explictly state them in our axioms. Ideally, our axiomatic system should be simple, minimalistic and avoid logically 'repeating' itself.

[^1]: The numbers 1 and 0 are an arbitrary convention, these  may as well be 100 or $$ \pi $$ or anything else

### Kolmogorov's axioms

________

Let \\(\Omega\\) be a collection of elements \\(\xi\\), \\(\eta\\), \\(\zeta\\),..., which we shall call elementary events, and \\(\sigma\\) a set of subsets of \\(\Omega\\) ; the elements of the set \\(\sigma\\) will be called random events.

1. \\(\sigma\\) is a [field of sets](https://en.wikipedia.org/wiki/Field_of_sets)
2. \\(\sigma\\) contains the set \\(\Omega\\)[^3]
3. To each set A in \\(\sigma\\) is assigned a non-negative real number \\(\mathbb{P}[A]\\). This number \\(\mathbb{P}[A]\\) is called the probability of the event A.
4. \\(\mathbb{P}[\Omega] = 1\\)
5. If A and B have no element in common, then \\(\mathbb{P}[A] + \mathbb{P}[B] = \mathbb{P}[A \cup B]\\)

The system of sets \\(\sigma\\), together with the definite assignment of the numbers \\(\\mathbb{P}[A]\\) satisfying these axioms 1-5, is called a field of probability.

[^3]: axiom 2 is already implied if you use the definition of a field of sets given on wikipedia, but Kolmogorov uses a slightly different definiton given by Hausdorf in an [early 20th century book on set theory](https://books.google.de/books?id=TFA_EAAAQBAJ&printsec=frontcover&hl=de&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false). Hausdorf's 'field' equipped with axiom 2 is (I think!), the same object as the field defined on wikipedia.

________

In the first paragraph and the first two axioms, Kolmogorov takes care of our input set. \\(\Omega\\) is the set of events that could happen in the world following some experiment like the roll of a die. In that case, \\(\Omega=\\{1,2,3,4,5,6\\}\\). \\(\sigma\\) is a subset of the power set of \\(\Omega\\), which means in our example that it could contain elements such as \\(\\{1\\}, \\{3\\}, \\{1,3\\}\\), \\(\\{1,2,3,4\\}\\), or \\(\Omega\\) itself. We are interested in assigning probabilities to members of \\(\sigma\\) rather than members of \\(\Omega\\). This is becuase we might be just as excited to discuss, for example, what the probability of a die landing a prime or an even number as the probability of it landing a specific number. Importantly, \\(\sigma\\) is assumed to be a field, which means we can happily operate[^2] on the sets in \\(\sigma\\) and be assured that the result is actually still in \\(\sigma\\) and therefore has a probability assigned to it. For example, if \\(\\{1\\} \\in \sigma \\space and \\space \\{3\\} \\in \sigma\\), then \\(\\{1,3\\}\\in \sigma\\). 

The next three axioms outline the features of our function \\(\mathbb{P}\\). Most of the heavy lifting is done by the confluence of axioms 4 and 5. For example, since \\(\mathbb{P}[\Omega] = 1\\), and \\(\Omega = \Omega \cup \emptyset\\) and \\(\Omega\\) and \\(\emptyset \\) have no intersection, axiom 5 tells us that \\(\mathbb{P}[\Omega] = \mathbb{P}[\Omega \cup \emptyset] = \mathbb{P}[\Omega] + \mathbb{P}[\emptyset]\\), from which follows that \\(\mathbb{P}[\emptyset] = 0\\). This reflects our intuition that when we experience a random event, the probability that none of the possible outcomes happens is zero.

Elegantly, these three simple claims allow us to deduce many, many more of the features of probabilities that we would like to be true. You can try and prove some yourself or check the proofs on [wikipedia](https://en.wikipedia.org/wiki/Probability_axioms#Consequences) or wherever else you can find them. Importantly for the purposes of this post, it can be shown that if \\(A \subseteq B\\) for any \\(A, B \in \sigma\\), then \\(\mathbb{P}[A] \leq \mathbb{P}[B]\\).

From my perspective ninety years in the future, there were several pieces of this system that surprised me. Firstly, axiom 5 only makes claims about pairwise unions of sets, whereas my cached version of the axiom made a claim about infinite sums. Secondly, \\(\sigma\\) is a field, whereas I am used to it being a [Borel field](https://en.wikipedia.org/wiki/%CE%A3-algebra) a.k.a a \\(\sigma\\)-algebra. \\(\sigma\\)-algebras are meaningfully different from 'normal' fields because the first are closed by infinite unions, whereas the last aren't. Finally and most eye-catching of all, \\(\Omega\\) is assumed to be a *finite* set. This contrasts the modern formulation I'm familiar with, where no claim is made as to the size of \\(\Omega\\). The third anomaly actually explains the first two, as one doesn't need to worry about infinite unions when dealing with a finite set.

Kolmogorov acknowledges the incompleteness of this system, and claims that in order to properly define a field of probability over an infinite set \\(\Omega\\), one needs a supplementary sixth axiom. This really turned my head because the modern formalization doesn't use any additional axioms to feel like it properly dealt with infinite sets...

[^2]: The main operations we're concerned with are the union \\((\cup) \\), intersection \\((\cap) \\), and difference \\( (-) \\) of elements in \\(\sigma\\), but also the [complement](https://en.wikipedia.org/wiki/Complement_(set_theory)) \\((A^C)\\) of an element A with respect to \\(\Omega\\).

### A more modern presentation of the axioms

________
Let \\((\Omega, \sigma\\)) be a measurable space. A probability measure is a total function \\(\mathbb{P}:\sigma \rightarrow \mathbb{R} \\) such that:

1. \\(\forall A \in \sigma, \space \mathbb{P}[A]\geq 0\\)
2. \\(\mathbb{P}[\Omega] = 1\\)
3. (additivity) \\(\mathbb{P}[\bigcup_{n=1}^{\infty}A_n]=\sum_{n=1}^{\infty}\mathbb{P}[A_n]\\) for a sequence \\((A_n)_{n \geq 1}\\) of sets in \\(\sigma\\)

For a \\(\mathbb{P}\\) satisfying these axioms, we call \\((\Omega, \sigma, \mathbb{P})\\) a probability space.

________


One may notice that the first two axioms in Kolgomorov's text got eaten up by the first paragraph of our new presentation. This is, I suspect, an amusing effect of the inexorable progress of time. Information and concepts that have proven repeatedly useful get squished and compressed into ever more deformed shorthands. Over time, the information that \\(\Omega\\) is a set and that \\(\sigma\\) is a \\(\sigma\\)-algebra over that set got flattened into '\\((\Omega, \sigma\\)) is a measurable space.'

The more substantive difference here is that Swan tries to directly define probabilities for sets that are not necessarily finite, without the use of an auxilliary axiom. It does this by making \\(\sigma\\) closed under infinite unions as well as finite ones, and secondly by defining the additivity axiom for infinite unions. The question this post seeks to answer next is what is the hole, inconsistency or pathological example that these modifications are undoubtedly papering over. Moreover, how did Kolmogorov deal with this hole and why did he choose to add a sixth axiom instead of modifying the first five until no holes were left.

## The Mysterious sixth axiom

________

6. For a decreasing sequence of events \\(A_1 \supset A_2 \supset ... \supset A_n \supset ...\\) of \\(\sigma\\) for which \\(\bigcap_{n=1}^{\infty}A_n = \emptyset \\), the following equation holds: \
\
\\(\lim_{n \to \infty} \mathbb{P}[A_n] = 0\\)
________


This axiom is one of those that is so glaringly obvious that its necessity is slightly disconcerting. Intuitively, the intersection of all these sets is \\(\emptyset\\), this should mean that no element of \\(\Omega\\) is actually contained in all of them, and therefore that any probability assigned to any elementary event in \\(\Omega\\) won't 'make it' into the limit probability of the sequence.

The problem with this informal line of reasoning is that it seems impossible to prove with our original five axioms. It's obviously something we *want* to be true about probabilities, but our system of axioms doesn't quite reflect that yet.

To understand this problem better, I constructed a monster: an example of a probability field which fits Kolmogorov's five axioms but clearly doesn't work the way we would want probabilities to work.

### The Monster

I figured that my search for a monster could start by directly contradicting the sixth axiom and seeing what happens:

________
#### Definition 1:

Let \\(\sigma\\) be a field over \\(\Omega\\). Let \\(\mathbb{P}\\) be a probability field over \\(\sigma\\). Satisfying Kolmogorov's first five axioms. We define \\(A_1 \supset A_2 \supset ... \supset A_n \supset ...\\) to be a decreasing sequence of elements of \\(\sigma\\) such that \\(\bigcap_{n=1}^{\infty}A_n = \emptyset \\), and such that for all n, \\(\mathbb{P}[A_n] = 1\\). Since all members of our sequence have a probability of one, \\(\lim_{n \to \infty} \mathbb{P}[A_n] = 1 \neq 0 \\), which contradicts axiom 6. 

#### Example:

Let \\(\Omega = \mathbb{R}\\) and let \\(\sigma = \mathbb{B}(\mathbb{R})\\), the Borel \\(\sigma\\)-algebra over the real numbers. Let \\((A_n)_{n \geq 1}\\) be a sequence of sets \\([0,1], [0, \frac{1}{2}], ..., [0, \frac{1}{n}], ... \\) Let's define \\(\mathbb{P}\\) such that \\(\mathbb{P}[A_n] = 1\\) for all n.

________

What this candidate monster is saying is that no matter how small you make \\(A_n\\) by making n larger, the probability of our experiment landing on that increasingly small member of \\(\sigma\\) will still be 1. Axiom 4 isn't contradicted, because we can perfectly say that \\(\mathbb{P}[\Omega - A_1] = 0 \\). In our example, this would mean that the probability of landing outside of the interval \\(\left[0,1\right]\\) is 0.

Perhaps we can attempt to fend off our monster using the fifth axiom. The general idea of our proof is that if each \\(A_n\\) has a probability of one, then the probability of \\(A_1 - A_n\\) must be zero. If we can express \\(A_1\\) as a disjoint union of things that *kind of* look like the \\(A_1 - A_n\\) expression, we can show that the probability of each one of those things is zero, and therefore that \\(\mathbb{P}[A_1] = 0\\) and not 1!

*Proof:* First, let's  describe \\(A_1\\) in terms of unions of disjoint sets. Since our sequence is decreasing, we can make a *disjoint* union of sets that equals \\(A_1\\) by taking the nth element to be 'whatever is in the nth element of \\((A_n)_{n \geq 1}\\) , but not in the (n+1)th element. For example, we could describe the interval \\(\left[0,1 \right] \\) as the infinite union: \\(\left[\frac{1}{2}, 1 \right] \cup \left[ \frac{1}{3}, \frac{1}{2}\right) \cup \left[\frac{1}{4}, \frac{1}{3} \right) \cup ... \cup \left[\frac{1}{n}, \frac{1}{n-1} \right) \cup ... \\) 

Formally, we can write this union as: \\(A_1 = (A_1 - A_2) \cup (A_2 - A_3) \cup ... \cup (A_n - A_{n+1}) \cup ...\\)

For all n, we can show that \\(\mathbb{P}[A_n - A_{n+1}]\\) = 0. This is because given that \\(\mathbb{P}[A_{n+1}] = 1\\), then the probability of the part of \\(A_n\\) that is *not* contained in \\(A_{n+1}\\) must be zero, since otherwise the probability of their disjoint union would overshoot the probability of \\(A_1\\). Now, we can use axiom 5 to say that

 \\(\mathbb{P}[A_1] = \mathbb{P}[(A_1 - A_2) \cup (A_2 - A_3) \cup ... \cup (A_n - A_{n+1}) \cup ...] = \\) 
\\( = \mathbb{P}[A_1-A_2] + \mathbb{P}[A_2-A_3] + ... + \mathbb{P}[A_n-A_{n+1}] + ... = \\) \
\\( = \sum_{n=1}^{\infty} \mathbb{P}[A_n-A_{n+1}]\\)

Since each one of the members of our sum is zero, \\(\mathbb{P}[A_1] = 0\\), but this contradicts that \\(\mathbb{P}[A_n] = 1\\). We have then that this probability function \\(\mathbb{P}\\) isn't a valid function after all!  \\(\blacksquare\\)

One may have noticed that I put my thumb on the scale while writing that proof. Specifically, I used axiom 5 for to turn a *countably infinite* union into a countably infinite sum. Kolmogorov's original axioms only assumed this additive property for finite unions of disjoint sets.

What this means for our little proof is that we can't make the step of turning the infinite union into an infinite sum. To deal with our monster, we would have to be able to describe 
\\(A_1\\) in terms of a finite union of members of all the members of our infinite sequence of sets \\(A_1, A_2, ..., A_n, ... \\)  All we can do is impotently flail our arms, taking the union of arbitrarily large - but finite - sets. Each time we exclaim that \\(\sum_{n=1}^{n} \mathbb{P}[A_n-A_{n+1}] = 0 \\) and beg our monster to acknowledge that if we can make n so large and still have a probability zero, then surely the probability of \\(A_1\\) is also zero. Each time, the monster leers at us and insists we trust its claim that the probability of \\(A_1\\) is indeed 1. After all, we haven't fully described \\(A_1\\) with our pathetically finite union, so how can we be sure?

### Fending off the monster: the two options

Kolmogorov's original paper rather crudely exorcises this kind of monster by explicitly outlawing it with the sixth axiom. It simply says: 'that monster is not a probability field because I said so.' While this option no doubt 'works,' I prefer the approach of the system I learned in my probability course. Instead of adding a sixth axiom, it simply strengthens axiom 5 to include infinite unions. As we saw, this strengthened axiom allows us to comfortably disqualify the monster from before, but it's even more powerful than that. We can show that if we have a monotone (increasing or decreasing) sequence, the probability set that the sequence tends towards is also the limit of the probabilities of the members of the set.

To prove this, we will be using the same trick as before of expressing our sequence as a union of disjoint sets, to allow us to turn the union into an infinite sum.

---

*Theorem 2:* Let \\((\Omega, \sigma, \mathbb{P})\\) be a probability space. Let \\((D\_n)\_{n \geq 1} \\) be a decreasing sequence of sets in \\(\sigma\\), and let \\((C\_n)\_{n \geq 1}\\) be an increasing sequence of sets.

Then: 

1. \\(\lim_{n \to \infty} \mathbb{P}[C_n] = \mathbb{P}[\bigcup_{n = 1}^{\infty} C_n]\\) and

2. \\(\lim_{n \to \infty} \mathbb{P}[D_n] = \mathbb{P}[\bigcap_{n = 1}^{\infty} D_n]\\)

---

*Proof:*

1. \\(\mathbb{P}[\bigcup_{n = 1}^{\infty} C_n] \stackrel{(1)}{=} \mathbb{P}[\bigcup_{n = 1}^{\infty} (C_n \cap C_{n-1}^C)] \\)
\
\\(\stackrel{(2)}{=} \sum_{n=1}^{\infty} \mathbb{P}[(C_n \cap C_{n-1}^C)] \\) 
\
\\(\stackrel{(3)}{=} \lim_{N \to \infty} \sum_{n=1}^{N} \mathbb{P}[(C_n \cap C_{n-1}^C)] \\) 
\
\\(\stackrel{(4)}{=} \lim_{N \to \infty} \mathbb{P}[\bigcup_{n=1}^{N} (C_n \cap C_{n-1}^C)] \\)
\
\\(\stackrel{(5)}{=} \lim_{N \to \infty} \mathbb{P}[\bigcup_{n=1}^{N} C_n] = \lim_{N \to \infty} \mathbb{P}[C_n]\\)

For increasing sequences, one good way to express \\(\bigcup_{n=1}^{\infty} C_n\\) as a disjoint unions is to, for each n, add 'the part of \\(C_n\\) which is not in the next elements of the set.' For example, suppose we had the increasing sequence \\((C\_n)\_{n \geq 1} =(\left[\frac{1}{2},1\right], \left[\frac{1}{4},1\right] , ... , \left[\frac{1}{2^n},1\right], ...\\) we could express the union of all the elements in \\(C_n\\), which is the interval \\(\left[0,1\right]\\), as the disjoint union: \\(\left[\frac{1}{2},1\right] \cup \left[\frac{1}{4},\frac{1}{2}\right] \cup \left[\frac{1}{8},\frac{1}{4}\right] \cup ... \cup \left[\frac{1}{2^{n}},\frac{1}{2^{n-1}}\right] \cup ... \\) 


Formally, that is just equation (1). Next, we use our powered up axiom 5 to pull the disjoint union into a sum in equation (2). The clever trick is to turn that infinite sum into a limit with (3), then use axiom 5 again in (4), to turn the sum into a union again. Finally, we turn our funky disjoint union back into \\(C_n\\) to get the limit of the probabilities of the union. Since \\((C\_n)\_{n \geq 1}\\) is an increasing sequence, the union of the elements in the sequence up to \\(C_n\\) is simply \\(C_n\\), and we're done! \\(\space \blacksquare \\)

2. We could write a proof for this second result that's very similar to the first, but we can make it easier for ourselves by using the first result as a short-cut. The idea for this proof can be found by playing around with the expression \\(\mathbb{P}[\bigcap_{n=1}^{\infty}D_n]\\) and the De Morgan laws, which one might think of doing because we want to turn intersections into unions in order to maybe apply axiom 5: \
\\(\mathbb{P}[\bigcap_{n=1}^{\infty} D_n] = \mathbb{P}[(\bigcup_{n=1}^{\infty} D\_{n}^{C})^C] \stackrel{(1)}{=} 1- \mathbb{P}[\bigcup_{n=1}^{\infty} D\_{n}^{C}] \\).
But here is when we notice that \\((D\_{n}^{C})\_{n \geq 1}\\) is an *increasing* sequence, and so we can apply our first result:
\\( = 1 - \lim_{n \to \infty} \mathbb{P}[D\_{n}^{C}] = 1- (1- \lim_{n \to \infty} \mathbb{P}[D_n] \\) 
\\(= \lim_{n \to \infty} \mathbb{P}[D_n]\\), this is the desired result. \\( \space \blacksquare \\)

The reader may perhaps guess that I did not just 'get lucky' that \\(D\_{n}^{C}\\) is an increasing sequence. I originally tried to prove the second part of our result. However, I then realized after getting to equality (1) that I could easily prove the second part if I had already proved the first part. This explains the apparently arbitrary choice of proving result 1. before result 2.

---

Once we have the lovely result from *theorem 2,* our monster from *definition 1* and others like it are easily dispelled. *Theorem 2* tells us that if there's a decreasing sequence of sets \\((D\_n)\_{n \geq 1}\\), the limit of the probabilites of the members of the sequence is necessarily the probability of \\(\bigcap_{n=1}^{\infty} D_n\\). In particular, if we have a decreasing sequence that gets smaller and smaller and tends towards the empty set, as our monster does, our theorem indeed confirms that the probability of the memebers of the set *must* tend towards zero, and the monster is defeated. 

### Even more beauty

(point out generalized theorem of continuity of probabilities using set theoretic defintion of a limit)

## Historical notes

### why did kolmogorov use axiom 6? how did axiom system change over time?


## Conclusion
