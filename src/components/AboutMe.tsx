
/// <reference types="vite-plugin-svgr/client" />
//@ts-expect-error
import lady from '../svg/lady.svg'
//@ts-expect-error

import road from '../svg/road.svg'
//@ts-expect-error

import css from '../svg/css.svg'
//@ts-expect-error

import git from '../svg/git.svg'
//@ts-expect-error

import html from '../svg/html.svg'
//@ts-expect-error

import java from '../svg/java.svg'
//@ts-expect-error

import js from '../svg/js.svg'
//@ts-expect-error

import reactJs from '../svg/react-js.svg'
//@ts-expect-error

import ts from '../svg/ts.svg'
//@ts-expect-error

import dotNet from '../svg/.Net.svg'
//@ts-expect-error

import github from '../svg/github.svg'
//@ts-expect-error

import linkedin from '../svg/linkedin.svg'
//@ts-expect-error

import gh from '../svg/githubactions.svg'
//@ts-expect-error

import k8s from '../svg/k8s.svg'
import React from 'react'


const AboutMe: React.FC = () => {
    const startDate = new Date("09/01/2022")
    const today = new Date()
    let years = today.getFullYear() - startDate.getFullYear()
    let months = today.getMonth() - startDate.getMonth()
    if (months < 0) {
        years--
        months += 12
    }

    return (
        <div id="about" className="container light">
            <div className="Left">
                <img src={lady} alt="lady" className="lady" />
                <img src={road} alt="road" className="road" />
            </div>
            <div className="separator   sep"></div>
            <div className="Right">
                <div className="Right-content">
                    <h1 className="title smol">About Me</h1>
                    <div className="wrapperAM" style={{ "background": "#D4D1D1" }}>
                        <span className="am">
                            I'm a Software Engineer with {`${years} `}  years of experience.
                            The following languages, library and  frameworks are the ones I'm familiar with
                        </span>
                        <div className="gridOne">
                            <ImageWithTag Image={"/Golang.png"} Tag='Golang' />
                            <ImageWithTag Image={k8s} Tag='K8S' />
                            <ImageWithTag Image={gh} Tag='Github Actions' />
                            <ImageWithTag Image={"/powershell.png"} Tag='Powershell' />
                            <ImageWithTag Image={"/docker.png"} Tag='Docker' />
                            <ImageWithTag Image={"/linux.png"} Tag='Linux' />
                            <ImageWithTag Image={"/cicd.png"} Tag='CI/CD' />
                            <ImageWithTag Image={java} Tag='Java' />
                            <ImageWithTag Image={js} Tag='JS' />
                            <ImageWithTag Image={reactJs} Tag='ReactJs' />
                            <ImageWithTag Image={ts} Tag='Typescript' />
                            <ImageWithTag Image={dotNet} Tag='DotNet' />
                            <ImageWithTag Image={git} Tag='Git' />
                            <ImageWithTag Image={html} Tag='HTML' />
                        </div>
                    </div>
                    <div className="wrapperAM">
                        <span className="am">
                            Following are my socials, please don't hesitate to check them out 😁
                            <div className="link">
                                <a href="https://github.com/toothsy" ><img src={github} alt="github" className="c-logo-1" /></a>
                                <a href="https://www.linkedin.com/in/c-j-atharva/"><img src={linkedin} style={{ marginLeft: ".6em" }} alt="linkedin" className="c-logo-2" /></a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface IWTprops {
    Image: any
    Tag: string
}
const ImageWithTag: React.FC<IWTprops> = ({ Image, Tag }) => {
    return (
        <div className="imageTag" >
            <img height="64" width="64" src={Image} alt={Tag} />
            <span>{Tag}</span>
        </div>
    )
}

export default AboutMe