# Quiz Game

A personal project using content sourced from [Thrice](https://thrice.geekswhodrink.com/) by Geeks Who Drink. Please visit their site to support their work. Five rounds per game, three clues of increasing difficulty per round. Built as a learning project for Expo/React Native, PHP, Docker, and Google Cloud.

> Live in [Play Store internal testing](https://play.google.com/apps/testing/com.chris.quizgame).

---

## Stack

| Layer | Tech |
| --- | --- |
| Frontend | Expo / React Native, React Navigation, EAS Build |
| Backend | PHP 8.2 / Apache, Docker, Cloud Run |
| Database | MySQL, Cloud SQL |
| Scraper | Node.js, Puppeteer, Cloud Run |
| Scheduler | Cloud Scheduler (daily 4:01am UTC) |
| CI/CD | GitHub Actions → Artifact Registry → Cloud Run |
| Secrets | Secret Manager |

---

## Repos

| Repo | Purpose |
| --- | --- |
| `app-gwd` | React Native frontend (this repo) |
| `api-gwd` | PHP REST API |
| `bot-gwd-scraper` | Puppeteer scraper |
| `common-gwd` | Shared DB migrations |
| `gwd-project` | Docker Compose orchestration |

## Architecture

```
Cloud Scheduler
    └── triggers daily scrape
            └── Scraper (Puppeteer / Cloud Run)
                    └── scrapes thrice.geekswhodrink.com
                    └── writes to Cloud SQL (MySQL)

React Native app
    └── fetches game data
            └── PHP API (Cloud Run)
                    └── reads Cloud SQL
```

