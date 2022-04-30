# Bachelor Thesis: Simulating Single-Leg Movement
__Project Created: October 2019__  
Create for: Bachelor Thesis 
Status: Finished

## Tools
+ C++
+ OpenGL
+ Box2D
+ wxPython(GUI)
+ Python
+ RabbitMQ
+ Reinforcement Learning(proximal policy optimization、PPO) with Torch

## Project Description
A platform to train reinforcement learning algorithms to learn to do single-leg movement.

## Features
+ A cross-platform OpenGL renderer for the training environment.
+ A Box2D environment with a single-leg robot.
+ A interface for algorithms to control the environments in parallel.
+ A RabbitMQ messaging middleware for connecting python algorithm with C++ environments.
+ A wxPython GUI for controlling and debugging the algorithm.
+ A Python implementation of the PPO RL algorithm.

<img src="assets/images/project/bachelorthesis/main.gif" width="500"/>

*[Training result on Youtube.](https://youtu.be/qamrnA_1zmc)*

<img src="assets/images/project/bachelorthesis/gui.png" width="500"/>

*wxPython GUI for controlling the algorithm.*

<img src="assets/images/project/bachelorthesis/env.png" width="500"/>

*Box2D environment rendered by OpenGL.*

<img src="assets/images/project/bachelorthesis/modules.png" width="500"/>

*Modules of the project.*

<img src="assets/images/project/bachelorthesis/dataflow.png" width="500"/>

*Dataflow*

<img src="assets/images/project/bachelorthesis/interface.png" width="500"/>

*Interface connections*