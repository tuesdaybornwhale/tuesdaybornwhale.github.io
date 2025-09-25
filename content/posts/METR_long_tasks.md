---
title: "Two red-team critiques of METR's research on long tasks"
date: 2025-09-16T20:32:28+02:00
draft: false
---

AI benchmarks are one attempt to track and formalise the progress of AI's developing capabilities. As explained succinctly in the introduction to ["Measuring AI Ability to Complete Long Tasks"](https://arxiv.org/abs/2503.14499) (Kwa et al.), published by METR this year, commonly used benchmarks suffer from a variety of issues. One of them is that it's hard to track AI progress across time because benchmarks are often not mutually comparable. METR proposes a metric which addresses this problem: the X% (task completion) time horizon, defined as the maximum length of task for a human that an AI can complete X% of the time. I really like this metric as an attempt to quantitatively come to grips with how AI is developing over time.

In this paper, the authors make an effort to 'prototype' this metric in a practical setting, by measuring the development of the 50% and 80% time horizons in LLMs since GPT-2. They do so by employing human baseliners to perform coding tasks[^1], garnering an estimate of the time each task takes. They then evaluate the performance of LLMs since GPT-2 on each task and extract a binary value (did they 'do' the task or not).

I don't find the object-level results very compelling, as there are many methodological flaws in the way both human baseliners' and AI's performance are measured. Many of these are the result of limitations in resources and funding for a small non-profit like METR, and many are recognised and discussed thoughtfully in the paper. Overall, I see it as an excellent pilot that introduces a good idea for meaningfully tracking AI's progress over time, and lays the groundwork for this metric to be measured robustly with more resources.

In the interest of red-teaming, I've assembled two critiques I have of methodological choices and takeaways in the paper. I chose items which I consider aren't sufficiently addressed, and which I think aren't easily covered by just 'scaling up' (e.g. employing more human baseliners).

## 1. On context and environment

A subset of [HCAST](https://arxiv.org/pdf/2503.17354) tasks were given to both agents and human baseliners in [vivaria](https://vivaria.metr.org/), METR's open-source tool for running evaluations on agents. According to Kwa et al, these tasks require "much less context" than usual software tasks. Moreover, these were selected among other things to need only text input without, for example, visual inputs needed. Finally, all given HCAST tasks are "solvable by text editing via a bash shell".

I point these details out to emphasize how the tasks are selected to be tractable for LLMs, and that human baseliners were made to complete these tasks with equally low context and in limited environments. I think this is relevant because humans have a comparative advantage with respect to LLMs in more complex environments and probably use context to their advantage in completing real-world tasks.

Kwa et. al recognise that their task suites do not accurately represent real-world problems. This motivates a mini-experiment comparing the performance of external human baseliners, LLMs and repository maintainers on some issues in one of METR's internal repositories[^2]. They find that the performance of LLMs in these internal tasks is consistent with the paper's findings on HCAST, SWAA and RE-Bench – but only when measured against the low-context human baseliners, as these are 5-18 times slower than the usual repository maintainers. Kwa et al. remark that this suggests their findings are more significant for measuring the progress of AI's X% time-horizon against *low-context* humans. However, they don't take the next step, to conclude that the body of their research is measuring the wrong thing. Most software development is high-context and involves much messier environments which humans have time to get used to. Therefore, the relevant question for deciding when coding tasks and jobs will be automated is how AI compares to human baseliners **with high, and not low, context.** That's why HCAST specifically may not be a very good task-suite for tracking AI's ability to automate programming jobs and tasks. It should be replaced (resources permitting) by a suite of tasks which have added context comparable to that seen in the average software development job. Additionally, baseliners should be familiar with that context.

The reason that the level of task context is important to bring up is that I seem to disagree with the authors on a key crux here. Discussing[^3] issues with accurately measuring human times for task completions, they write:

>The human baseliners that determine the length of our tasks have much less context than average employees, potentially increasing measured task length. Our tasks are designed to require minimal context, which somewhat mitigates this problem.

Responding to this: while I agree that baseliners having less context is a problem, the proposed fix doesn’t address all the ways in which it is a problem. By lowering the context needed instead of giving baseliners more context, the paper compares humans and AI in an environment which does not reflect real coding tasks.

----

To be fair, even though this paper doesn't insist on the importance of comparing AI to high-context humans, METR's more recent research does meaningfully work on this. Specifically, a newer [publication](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) aims to measure how access to AI impacts human coders who are familiar with the repositories they're working in. 

## 2. On generalisability and 'coding is all you need'

Is coding all you need – or not? Why or why not?

The suites used by Kwa et al. almost exclusively contain tasks related to software development and machine learning. The paper recognises this limitation, and METR *has* since made [efforts](https://metr.org/blog/2025-07-14-how-does-time-horizon-vary-across-domains/) to examine time-horizon development across different domains. However, they also suggest[^4] that their findings may generalise at least somewhat to other domains.

I’m not convinced that improvement in the X% time-horizon for coding tasks is likely to translate to other domains. One reason for my skepticism is related to my previous critique on context. Many coding tasks require less context and simpler environments than other ‘economically valuable’[^6] tasks.

An obvious point in favour of coding capabilities generalising well is the ‘coding is all you need’ hypothesis. It postulates that improvements in AI coding should enable the automation of large parts of AI R&D in all domains. This would speed up AI’s general development as a downstream effect of its improvement in software tasks. The authors nod towards this possibility[^5], describing "substantial AI R&D automation" as likely. However, they also seem willing to explore time-horizon development across other fields, which could be interpreted as hedging against generalisation.

What I’d love to find out is how much stock Kwa et al. put into the ‘coding is all you need’ hypothesis. Moreover, I’m interested in what kind of research can be done into exactly how much AI R&D can be automated as a result of advances in its coding. The reason I am critiquing and not merely asking questions is that this hypothesis is a potential crux on which generalisability to other domains stands. Such a crucial hypothesis should be tested and justified.

## Conclusion

This post briefly summarises METR’s [“Measuring AI Ability to Complete Long Tasks”](https://arxiv.org/abs/2503.14499), describing why it is valuable research that I'm excited about. I additionally present two critiques that open up avenues for further research. My first point is that the paper measures AI’s coding capabilities in environments with context too low to allow good predictions for when real coding tasks may be automated. AI’s coding should instead be measured in high context environments against high context humans. The other critique concerns how generalisable AI’s progress in software development may be to other types of tasks – I propose that the ‘coding is all you need’ hypothesis is a crux for generalisability and should be tested.



[^1]: These are taken from the task suites HCAST, RE-Bench and SWAA, which are described in the paper. The vast majority are either coding tasks or are otherwise software related (for instance, deciding which file name out of four is most likely to contain a password)
[^2]: this is discussed in section 6.4
[^3]: section 8.1
[^4]: section 7.1
[^5]: section 7.2.2
[^6]: Kwa et al. mention founding a startup as an example of an economically valuable task. It is significantly more complex than coding is.