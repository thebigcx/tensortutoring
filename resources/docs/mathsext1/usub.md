---
title: "Integration by Substitution"
description: "Your documentation starts here."
---

# How to do a u-substitution

Within the realm of integration, all techniques can be understood in terms of their differentiation counterparts. U-substitutions are no different, but the technique of which it is the inverse may not be immediately obvious. It is in fact the **inverse chain rule**, which we will explain below.

## Proof
The chain rule can be summarised as:

$$
\frac{d}{dx} f(g(x)) = f'(g(x)) \times g'(x)
$$

The nested functions can be confusing, so think of the $f'(g(x))$ as differentiating the outer function $f(x)$ with respect to the inner function $g(x)$. As an example:

$$
\frac{d}{dx} sin(x^2)
$$

We will differentiate the sine function with respect to $x^2$, giving $cos(x^2)$, and then we will multiply by $2x$:

$$
= cos(x^2) \times 2x
$$

This is important for u-substitution. Let's consider integrating both sides of the chain rule expression:

$$
\int \frac{d}{dx} f(g(x)) \ dx = \int f'(g(x)) \times g'(x) \ dx
$$

Left hand side is an integral of a derivative, which just cancels down to $f(g(x))$. Switching LHS and RHS:

$$
\int f'(g(x)) \times g'(x) \ dx = f(g(x))
$$

And this is our u-substitution expression. We can see that to integrate a nested function, we need the derivative of the inside function $g'(x)$ on the end.

To make things easier, we will **substitute** $u = g(x)$ when we solve questions like this; this is where the technique gets its name. But when we substitute $u$, we need to also substitute $du$, as we must integrate functions in terms of $u$ with respect to $u$, not $x$. This is done as follows:

$$
\begin{equation} \label{eq1}
\begin{split}
g'(x) & = \frac{d}{dx}u \\\\
g'(x)dx & = du
\end{split}
\end{equation}
$$

So thus our $du$ will 'swallow up' the derivative function $g'(x)$. Once we are in terms of $u$, we can integrate like any other function:

$$
\begin{equation} \label{eq2}
\begin{split}
\int f'(u)du & = f(u) + C
\end{split}
\end{equation}
$$

We can then finally substitute $u = g(x)$ back in to our answer, to get it in terms of $x$:

$$
f(u) + C = f(g(x)) + C
$$

## Example

Lets consider:

$$
\int xcos(x^2)dx
$$

As we have nested functions, we will integrate by u-substitution. When we determine what to set $u$ to be, we must consider that we must have its derivative on the outside (remember that $g'(x)$ on the end). So let's set it to be $x^2$:

$$
\text{Let}\ u = x^2
$$

Now we need to calculate the derivative of $u$ with respect to $x$:

$$
\begin{equation} \label{eq3}
\begin{split}
\frac{du}{dx} & = 2x \\\\
xdx &= \frac{1}{2}\ du
\end{split}
\end{equation}
$$

And finally we can substitute in to get a new integral in terms of $u$:

$$
\begin{equation} \label{eq4}
\begin{split}
& \int \frac{1}{2}cos(u)du \\\\
& = \frac{1}{2}sin(u) + C \\\\
& = \frac{1}{2}sin(x^2) + C
\end{split}
\end{equation}
$$

## A word about bounds

This is where most students go wrong. If we have a **definite** integral (one which lower and upper bounds), we must write these in terms of $u$ as well. To do this, we subsitute the bounds for $x$ into our $u(x)$ function (the statement in which we let $u$ be some function of $x$) to compute our new bounds.

For example, if the previous integral was actually:

$$
\int^2_1 xcos(x^2)dx
$$

Our new bounds would be, based on the statement $u = x^2$:

$$
\begin{equation} \label{eq5}
\begin{split}
\text{Upper} = 2^2 = 4 \\\\
\text{Lower} = 1^2 = 1
\end{split}
\end{equation}
$$

So our integral in terms of $u$ is now:

$$
\int^4_1 \frac{1}{2}cos(u)du \\\\
$$