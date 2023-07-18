/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import * as React from "react";
import Grid from "@mui/material/Grid";
export enum Hostnames {
  Moltres = "moltres",
  Zapdos = "zapdos",
  Articuno = "articuno",
}
const invalid: string = "zsh: command not found: ";

const commands: string[] = ["whoami", "projects", "contact", "clear"];

type contactMapType = {
  [id: string]: string;
};
const contactMap: contactMapType = {
  LinkedIn: "https://www.linkedin.com/in/jingkaitan/",
  Github: "https://github.com/xlanor",
};

const hosts: Hostnames[] = [
  Hostnames.Articuno,
  Hostnames.Moltres,
  Hostnames.Zapdos,
];

const help: React.ReactElement = (
  <>
    <Grid xs={12}>
      <span className="terminalResponse">
        The following commands are available:
      </span>
    </Grid>
    {commands.map((c: string): React.ReactElement => {
      return (
        <Grid xs={12}>
          <span className="terminalResponse">{c}</span>
        </Grid>
      );
    })}
  </>
);

const about: React.ReactElement = (
  <>
    <Grid xs={12}>
      <span className="terminalResponse">
        Hi, my name is <u>Jingkai</u>
      </span>
    </Grid>
    <Grid xs={12}>
      <span className="terminalResponse">
        I'm currently a Senior Software Engineer working in London 🇬🇧.
      </span>
    </Grid>

    <Grid xs={12}>
      <span className="terminalResponse">
        Previously, I worked in web development as a Full Stack Developer
      </span>
    </Grid>

    <Grid xs={12}>
      <span className="terminalResponse">
        then as a Senior Devops Engineer running a small team in Singapore 🇸🇬
      </span>
    </Grid>

    <Grid xs={12}>
      <span className="terminalResponse">
        In my free time, I'm currently pursuing my MSc from Gatech, and
      </span>
    </Grid>

    <Grid xs={12}>
      <span className="terminalResponse">
        learning photography in my free time.
      </span>
    </Grid>
  </>
);

const projects: React.ReactElement = (
  <>
    <Grid xs={12}>
      <span className="terminalResponse">
        <u>Linux Mirror</u>
      </span>
    </Grid>

    <Grid xs={12}>
      <span className="terminalResponse">
        I currently run a linux mirror serving the Asia Pacific region for
        several distros, such as Alma, Rocky, Arch, and Endeavour.
      </span>
    </Grid>

    <Grid xs={12}>
      <span className="terminalResponse">
        <u>Homelabbing</u>
      </span>
    </Grid>

    <Grid xs={12}>
      <span className="terminalResponse">
        I run a homelab back in Singapore across several physical hosts. It
        allows me to run public services such as my mirror, as well as serve as
        a playground for me to improve my infrastructure skills.
      </span>
    </Grid>
    <Grid xs={12}>
      <span className="terminalResponse">
        <u>OSS Contributions</u>
      </span>
    </Grid>
    <Grid xs={12}>
      <span className="terminalResponse">
        Whenever I'm free, I try to look for OSS projects where I can contribute
        fixes upstream. ORY Oathkeeper, Keto, Apache Airflow, Mattermost, are
        amongst some of the upstream repositories that I have contributed fixes
        to
      </span>
    </Grid>
  </>
);

const contact: React.ReactElement = (
  <>
    {Object.keys(contactMap).map((key: string) => {
      return (
        <>
          <Grid xs={12}>
            <span className="terminalResponse">
              <a
                css={css`
                  color: grey;
                `}
                href={contactMap[key]}
                target="_blank"
              >
                {key}
              </a>
            </span>
          </Grid>
        </>
      );
    })}
  </>
);

export const checkValidResponse = (prompt: string): React.ReactElement => {
  switch (prompt) {
    case "whoami":
      return about;
    case "projects":
      return projects;
    case "contact":
      return contact;
    case "help":
      return help;
    default:
      return (
        <>
          <Grid item xs={12}>
            <span className="terminalResponse">
              {invalid} {prompt}
            </span>
          </Grid>

          <Grid item xs={12}>
            <span className="terminalResponse">
              Use `help` to find out more.
            </span>
          </Grid>
        </>
      );
  }
};

export const getHostName = (): Hostnames => {
  return hosts[Math.floor(Math.random() * hosts.length)];
};
