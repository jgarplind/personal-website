---
title: "Ramblings on software testing"
date: "2021-12-20"
edited: "2021-12-20"
tags: ["Testing"]
---

Recently I have been thinking a bit about testing in various shapes and forms. Everything from scheduled API tests to local jest tests to testing philosophies. This article is intended to be a way for me to share some insights with my future self and possibly other interested readers.

## Why do we test?

Why are we testing our software? It sounds like a question too simple to be asked, but I often find that developers have very varying viewpoints on this.

A lot of the time, we are testing simply because we have been told we should. Quite possibly, this _should_ is enforced with an artificial metric (usually line coverage), where all code _must_ exceed a certain threshold, or it won't be merged. This gives us guidance on the expectations, and we can start to write tests accordingly in order to meet the expectations.

Quite a few developers will adhere to the guidelines, never really questioning them, and add a huge amount of tests which only test implementation details. This can double the effort required to not only release, but also maintain a feature, without giving any meaningful result other than meeting the artificial expectations (and catching a slim share of the bugs we would otherwise ship, I'll have to admit). The fact that we do catch a bug once in a while reinforces the belief that the testing must in fact be quite good, and so we continue doing things this way.

Yet, testing this way never feels good. It feels like something that must be done, and in the end you are not really sure why you did it. Sure, someone asked you to, but why did they want it? Probably because it is their best way to measure quality. Does that mean it is good, or even necessary? Probably not.

After a few years of first being one of the persons described above, followed by a few a-ha moments, I think I have reached some conclusions worth sharing, if only to my future self.

First and foremost, ask yourself what benefit _you_ see in testing. What does it do for you? What difference does it make when your closest colleague has written tests, maybe even comprehensible, "good" tests?

Personally I've come to the conclusion that testing is primarily a way for me to ship with confidence. This is hardly controversial in some circles, after all I find my inspiration somewhere. But to others, this is somewhat of a novel concept, or at least something that has not been articulated so clearly before.

By writing a certain amount of tests, I build confidence in shipping new, changed, or removed code, and I don't have to be like a cat on hot bricks, monitoring every possible alert that something may have gone wrong. Instead, I can with sufficient assurance move on to the next thing, only very rarely having to revisit the thing that was just shipped because of an error. Does this mean I have met the artificial testing criteria? Sometimes. But very often not. Certain code benefits more from testing than other code.

- Code that is _easy_ to test (e.g. not requiring extensive mocking) is probably the first to be tested more frequently. This is great, except that it is also tends to be the first part of the code that is overtested, riddled with cases that are not relevant, or perhaps only tangentially so, all while increasing the surface area, and thus the time required to run our tests.
- Code that _changes frequently_ should probably be tested more than most other code, because changes introduce bugs, and by writing tests that assert our past and current expectations, we do not let such bugs slip into production unnoticed.
- Code that lends itself to being tested without getting involved in the implementation details is a great candidate for more comprehensive testing, since it allows us to write robust tests that will survive many iterations of the code, giving us extended benefits for a relatively small investment.
- Trust your gut. Does changing a certain part of the code make you nervous? Does it also make all of your colleagues nervous? That is probably a great indication that you need help from test assertions that you are doing the right thing. Is it hard to know what to assert? Time to straighten out the expectations with the rest of the team.

In the best of my worlds, we test our code extensively whether it is difficult or not, but in reality we must weigh the time we spend on testing with both development time and time required to run our tests. Since that is the case, I argue that we are capable as developers (with assistance from QA or other team members if they are willing to contribute) to figure out what needs testing, and don't need to fall back to artificial metrics that usually worsen rather than improve our test suites.

## How do we decide what to test?

Assuming that you have come to a similar realization as I: That we want to test, but not too much, and only focusing on what is worthwhile. How do we go about it?

I think the often simplest and most rewarding time and place to add a test is when you're fixing a bug. You most likely have a clear expectation, a part of the code that is not behaving as expected, and will eventually reach a solution. By first writing a test that matches the expectations of the bug report, you have ensured that the very same bug will never reappear. While I don't have the numbers, I'll bet that the bugs that are most likely to appear at any given time are old bugs that resurface. And we just made that impossible? That sounds like a great start.

We also follow a principle I hold close to heart, which is that we should always write a failing test before we ensure it passes. This helps us avoid a situation where the test itself is broken, and passes unexpectedly (which happens more than any of us would care to admit). Once the bug has been resolved, we have not only fixed the bug for now, but for all future. Pretty powerful.

The same workflow _could_ be applied to new features, but I personally find it more difficult to execute, since new features usually require new ways of thinking, and our automated testing tools usually operate at a lower level than that at which we make frequent changes while iterating on a new feature. Supposedly, what is described above is Test Driven Development in all its glory, and if that works for you, that's great. If it doesn't, focus on taking home the most obvious wins before aiming higher.

Easier, in my opinion, would be to write tests right after, or during the development of a new feature. In the best of worlds it is easy to translate business requirements into user flows, which in turn can be translated into code tests, but this of course varies depending on circumstances.

## Ending note

That will be all for now! I'd rather get into the habit of writing drafts for my own use on a recurring basis than polishing never-to-be-publised articles endlessly.

In case you have found your way here and this text piqued your interest, let me know and I'll be happy to expand further or have a discussion in person.
