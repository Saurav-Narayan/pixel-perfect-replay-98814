<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All user-facing copy lives in src/i18n/locales/{en,hi,mr,bn}.ts (en defines the type); never hardcode text in components. Why: 4-language site.
- Front-end shell only: no backend/data/API yet; placeholder actions open the shared ComingSoon dialog via useComingSoon(). Why: logic is added later elsewhere.
- Language choice is stored in localStorage and restored client-side by LanguageGate; per-language fonts switch via :root:lang() in styles.css.
