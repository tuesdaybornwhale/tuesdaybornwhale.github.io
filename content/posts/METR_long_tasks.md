---
title: "Two red-team objections to METR's research on long tasks "
date: 2025-09-16T20:32:28+02:00
draft: false
---

AI benchmarks are one attempt to track and formalise the progress of AI's developing capabilities. As explained succinctly in the introduction to ["Measuring AI Ability to Complete Long Tasks"](https://arxiv.org/abs/2503.14499) (Kwa et al.), published by METR this year, commonly used benchmarks suffer from a variety of issues, among them that it's hard to track AI progress across time because benchmarks are not often mutually comparable. METR propose a metric which addresses this problem: the X% (task completion) time horizon, which indicates the maximum length of task for a human that an AI can complete X% of the time. I really like this metric as a first attempt to quantitatively come to grips with exactly how quickly AI is developing.

In the paper, METR make an effort to actually 'prototype' this metric in a practical setting, by measuring the development of the 50% and 80% time horizons in LLMs since GPT-2. They do so by employing human baseliners to perform a collection of coding tasks[^1], thus garnering an estimate of the time each task takes. They then evaluate the performance of LLMs since GPT-2 on each task and extract a binary value (did they 'do' the task or not).

I personally don't find the object-level results very compelling, as there are many methodological flaws in the way both human baseliners' and AI's performance are measured. Many of these are the result of limitations in resources and funding for a tiny non-profit like METR, and many are recognised and discussed thoughtfully in the paper. Overall, I see it as a good pilot that introduces a good idea for meaningfully tracking AI's progress over time, and lays the groundwork for this metric to be measured more robustly with more resources.

In the interest of red-teaming, I've assembled two objections I have to methodological choices and takeaways in the paper. I tried to choose items which I consider aren't sufficiently addressed, and which i think aren't easily addressed by just 'scaling up' (e.g. just employing more human baseliners).

## 1. On context and environment

A subset of [HCAST](https://arxiv.org/pdf/2503.17354) tasks were given to both agents and human baseliners in [vivaria](https://vivaria.metr.org/), METR's open-source tool for running evaluations on agents. According to Kwa et al, these tasks require 'much less context' than usual software tasks. Moreover, these were selected among other things to need only text input without, for example, visual inputs needed. Finally, all given HCAST tasks are 'solvable by text editing via a bash shell'.

I point these details out to emphasize how the tasks are selected to be tractable for LLMs, and that human baseliners were made to complete these tasks with equally low context and in limited environments. I think this is relevant because humans have a comparative advantage with respect to LLMs in more complex environments and (probably) use context to their advantage in completing real-world tasks.

Kwa et. al recognise that their task suites do not accurately represent real-world problems, and this motivates a mini-experiment comparing the performance of external human baseliners, LLMs 
and repository maintainers on some issues in one of METR's internal repositories (this is discussed in section 6.4). They find that the performance of LLMs in these internal tasks is consistent with the paper's findings on HCAST, SWAA and RE-Bench, but only when measured against the low-context human baseliners, as these are 5-18 times slower than the usual repository maintainers. Kwa et al. remark that this suggests their findings are more significant for measuring the progress of AI's X% time-horizon against *low-context* humans.  However, they don't take the next step, to conclude that the body of their research is measuring the wrong thing. Since most software development is high-context and involves much messier environments which humans have time to get used to, the relevant question for deciding when coding tasks and jobs will be automated is actually how AI compares to human baseliners with high, and not low, context. That's why I think that HCAST specifically is not a very good task-suite for getting the answers we want, and should be replaced (resources permitting) by a suite of tasks which have added context comparable to that seen in the average software development job. Additionally, baseliners should be familiar with that context.

The reason I thought this was an important point to bring up is that I seem to disagree with the authors on a key crux here. In section 8.1, discussing issues with accurately measuring human times for task completions, they write:

>The human baseliners that determine the length of our tasks have much less context than average employees, potentially increasing measured task length. Our tasks are designed to require minimal context, which somewhat mitigates this problem

To summarize my argument, tasks requiring minimal context does not mitigate the problem that human times are being calculated using low-context baseliners, it merely hides it.

----

To be fair to METR, even though they don't seem to insist on the importance of comparing AI to high-context humans in this particular paper, their future research actually does meaningfully work on this. In specific, a more recent [publication](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) of theirs aims to measure how access to AI impacts human coders who are familiar with the repositories they're working in. 

## 2. On generalisability and 'coding is all you need'

To summarise my point bluntly: is coding all you need or not? why or why not?

The task suites used by Kwa et al. are almost exclusively tasks related to software development and machine learning. While the paper recognises this limitation and have since made [efforts](https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/) to examine time-horizon development across different domains, they also suggest in section 7.1 that their findings may generalise at least somewhat to other domains.

In part due to many coding tasks needing less context and simpler environments than some other 'economically valuable' tasks, I'm not convinced that improvement in the X% time-horizon for coding tasks is likely to generalise well to other domains. 

One obvious point in favour of generalisation is the 'coding is all you need' hypothesis, which postulates that improvements in AI coding capabilities should enable automation of large parts of AI R&D, in turn speeding up the development of AI capabilities in other fields. The authors nod towards this possibility in section 7.2.2, and describe 'substantial AI R&D automation' as likely. However, they also seem willing to explore time-horizon development across other fields, which could be interpreted as hedging against this possibility.

What I'd love to find out is how much stock Kwa et al. put into the 'coding is all you need' hypothesis, and what kind of research has been done into how plausible it is.

[^1]: These are taken from the task suites HCAST, RE-Bench and SWAA, which are described in the paper. The vast majority are either coding tasks or are otherwise software related (for instance, deciding which file name out of four is most likely to contain a password)