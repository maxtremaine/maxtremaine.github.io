# Nobody Likes Travel Visas

How our users created the product.

Nov 11, 2016

I had an epiphany on the way to a Michigan Wolverines basketball game. I was crossing the border from Windsor Ontario into Detroit, and my friend asked, “Can you carry an open beer here?” I’m from Toronto, where you can’t buy beer outside of strictly regulated outlets (literally, “The Beer Store”), and drinking in public is punished severely, so I assumed that would be the case across the border. I consulted Google.

![Google’s First Page for “open alcohol michigan”](/img/nobodyLikesTravelVisas0.webp)

It is pretty easy to find the laws that govern open alcohol in Michigan, but it turns out that isn’t enough. There are several sections of the Michigan Legislature that apply to open alcohol in public, they’re not clearly laid out, and they’re not written in plain English. It took about a half hour to figure out what the laws meant.

![Michigan Legislature — Sections 257.624a, 436.1915 & 436.2021](/img/nobodyLikesTravelVisas1.webp)

There wasn’t an easy alternative for finding out if what we wanted to do was legal, and that hit me. This is the kind of issue that can be solved over a period of time in one’s home jurisdiction, getting to know the relevant laws and becoming comfortable with the general policies and governance structure, but when you’re travelling you don’t have the luxury of time to get to know the laws of your destination. That’s a problem in need of a solution.

## Minimum Viable Product
Armed with this insight, Ivan Sharko and I made our first product, Easy Law. It was a really simple application that would show summaries of state laws for a few often searched behaviours, allowing for apples-to-apples comparison from state to state. Our unique value proposition was, “One click to know what’s legal.”

![Easy Law 1.0 for iOS](/img/nobodyLikesTravelVisas2.webp)

We were really happy with our first minimum viable product, which did exactly the job that I had needed on my Michigan border crossing. We put it in people’s hands and asked them what they thought, and their responses were eye-opening. After 70 or so interviews there was one question that came up constantly:

> “Where do I find the visa and customs laws?”

This wasn’t a question that immediately occurred to us, but as we thought about it the process of finding the right border requirements was not easy. When we asked our users about what they were anxious about when travelling, the travel visa stories started pouring in. We had stumbled upon a treasure trove of complaints.

Many of the comments that we received focused on finding the right visa:

> “The Thai government website was not very clear. I didn’t really know what my options were until I actually went into the embassy and talked to someone.”

> “I wasn’t allowed back into India the following month because I had the wrong visa the first time around.”

> “I was refused at the departure gate because I didn’t have my Australian Visa. My vacation was cut short, since the next flight was available in two days.”

> “My Philippine visa was for 30 days, and I overstayed it by a day because I forgot that January has 31 days. It cost me $85.”

Others were able to find and apply for the right visa, but were overwhelmed with the amount of paperwork:

> “Sweden has numbers for everything, and it would be nice to just have that all in one place instead of keeping a pile of papers around.”

> “I have a binder that has all of my travel documentation in it, and it’s not very convenient to lug it around.”

> “I keep all of my documents as pictures on my phone, which probably isn’t that secure.”

Many more were put off by the available systems and services:

> “I applied for a visa to India on two different websites. One of them was sketchy, so I cancelled my credit card and used the other one. When I got to the border I had two visas, and the officials questioned me for hours.”

> “I was taken to a fake border crossing when crossing into Cambodia, where I overpaid and got delayed.”

> “The government website did not look legit… I thought for sure that someone was trying to steal my identity.”

> “…I just want to know the low-friction way to go somewhere interesting.”

Most of all, people really didn’t like filling out the same forms over and over again:

![A Pie Chart of Our Initial Findings](/img/nobodyLikesTravelVisas3.webp)

One question we eventually started opening our interviews with was, “Have you ever applied for a travel visa?” The answers we got fell into two distinct categories, “No;” and “Yes; it was a bad experience. I don’t like filling out forms and/or standing in lines.” It struck us that this was a widespread issue with the users that were drawn to our app, and there wasn’t a big name solution in the market for dealing with it.

We started building Sherpa — the easiest way to get a travel visa. Our strategy was to retool our existing product to display only travel visa and customs laws, and build in the capacity to apply for a couple of travel visas. A few prototypes later we had Sherpa 1.0, the first product we’ve seen that covers the whole process of finding and storing a travel visa on a mobile device.

![Sherpa 1.0 for iOS](/img/nobodyLikesTravelVisas4.webp)

From our interviews we knew that travel documentation was a salient issue that travellers were facing. We continued to get feedback on what an end-to-end travel visa solution would look like, making incremental changes along the way. Without having a manifesto, or even a mission, we had set out to replace passports altogether. Now we offer visa requirements and applications for users of 7 citizenships travelling to >150 destinations.

## Stepping Back

When we first stumbled upon this issue, the analyst inside of me started to ask, “Could this be a business?” We had been led down the travel visa rabbit hole by our users, so we didn’t really have a clear idea of how big that market was. I started digging into any accessible reports on travel and migration, and was happily surprised with what I found.

![Relevant Data on Tourism and Migration](/img/nobodyLikesTravelVisas5.webp)

It turns out that lots of people need visas. Whether for tourism, education, work or business, there are hundreds-of-millions issued each year. The details of who is applying for visas is also interesting, with the trends indicating both departure growth in regions that need lots of travel visas, and more visa requirements in regions with many departures. Taking into account the growing importance of mobile devices, there was a confluence of trends that made the product we had stumbled upon make sense.

![Tourist Visa Market Size by Visa Requirement Probability](/img/nobodyLikesTravelVisas6.webp)

There’s better public data on the tourist visa market, so that’s what I’ll focus on in this summary of our findings. There’s growth across the tourism market in terms of both the number of international tourist departures, and tourism expenditure; and the group of countries included in the Asia/Pacific, Middle East and African regions, who have to apply for the most visas, are gaining market share over Europe and the Americas. As governments move to electronic visas (e-visas, administered paper-free), case studies including Canada and Australia have shown that it becomes feasible for customs and immigration arms to require more tourists to apply for visas, allowing for better record keeping and appeasing common fears of illegal migration. These trends all contribute to an increase in travel visa requirements at a top level, solidifying the need for Sherpa.

## Staying Lean

It wasn’t through some stroke of genius that we decided build Sherpa. It took a lot of effort to understand what our initial users needed help with, but instead of taking time to consider every possible product, our development was greatly accelerated by finding a big problem that needed a solution. Our experience has identified 
Lean Startup Co.
 methodologies as key to making the right product, and we’re committing to them going forward.

My initial concern with user interviews driving our strategy was that they would be too highly variable, and not inherently representative. Ultimately there are too many degrees of freedom to test for in any business, but if you make yourself open to the challenges around you compelling product ideas will jump out, and products with no market will fall flat. A small sample can be meaningful if they exhibit the key characteristics of a group; in our case this was our travellers exhibiting the characteristic of having applied for a travel visa.

It’s not going to be easy, but armed with the data that our users continue to provide we are building a product that solves real problems. Sherpa is not the first product that we thought of, but we’re confident that it will work out better than Easy Law, not because we built it and measured our feedback, but because we measured our feedback and built. It is this distinction that will continue to drive our strategy going forward.

Big thanks to Sandeep De and Steve Farlow at Wilfrid Laurier University for introducing us to Customer Development, and the Lean Startup. If you’ve connected to any of the ideas here please reach out to me.

— Max Tremaine (@MaxTremaine), CEO of Sherpa
