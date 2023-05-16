---
name: Design Consult
about: Provides the most up to date checklist for Design Consultations
title: DC - {website.gov}
labels: "design consult"
assignees: ""
---

## Website URL

{website url}

## Checklist

List below the specific actions to be taken

- [ ] Schedule initial call with team to learn their goals but also conduct an informal [Website Evaluation](https://docs.google.com/document/d/1IFkJT_yYSd2Nwmjf-7PK7P96dE6hbyqisH4NuAH3nkU/edit?disco=AAAAWEabv74)
- [ ] Create new folder within existing website folder in drive called "Design Consult" and place Eval and other contents there.
  - {folder link goes here}

### Establish Recommendations

- [ ] Depending on the state of the site, pull down current HTML locally so as to have a static version on the desktop. Create a copy of the files which will hold any proposed changes. Once complete, run `git diff` against both html files and upload all contents to Drive in a Zip file.

```sh
# insert website name in between quotes, run commands one after the other. Assumes folder is the domain name
WEBSITE_NAME="blah.gov"
zip $WEBSITE_NAME.zip $WEBSITE_NAME -r -x $WEBSITE_NAME/notes.md -x $WEBSITE_NAME/.DS_Store
```

  - [ ] Capture screenshots of our proposed changes (desktop and mobile)
- [ ] Present findings and recommendations to team. This should come in the form of a meeting, a with a written report. The tone of the report should be actionable and speak to the changes suggested. If providing an updated HTML file, be sure to speak to those changes at a high level (do not go line by line). The [apps.ocfo.gsa.gov Changes and Recommendations](https://docs.google.com/document/d/1eXwkolQ6-dR8NvzBlD-_ALPMrz2GfwlrkNX6KVOxFDI/edit) is a good example.

### Post Deployment

_Following the change in production, take the following actions:_

- [ ] Copy "[before/after deck](https://docs.google.com/presentation/d/1Z4H6YF9SJqOpnetYGDJkv_52PjtbV6bcGZ_AOU7dhag/edit)" template, insert screenshots, update content within brackets {}
  - {link to deck goes here}
  - [ ] Symlink the deck into the website folder used for evals. In Drive, click the deck, press `Shift + Z` and select the website eval folder for that property.
