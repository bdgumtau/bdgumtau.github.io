document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------
  //  VIDEO LINK MAP
  //  Ensure these are Google Drive preview URLs as mentioned earlier:
  //  Example: "https://drive.google.com/file/d/FILE_ID/preview"
  // ------------------------------------------------------------

  const videoLinks = {
    "2024-12-08":	"	https://drive.google.com/file/d/1xKKeQg69LAtsFKcZo6HMU07VCeEyoEsD/preview	"	,
"2024-12-09":	"	https://drive.google.com/file/d/1Gff71QFwbQhLD7dY5f9NaF34VVj4YnHP/preview	"	,
"2024-12-10":	"	https://drive.google.com/file/d/1-6osyLnHikqYdjiDzm3kefWczusv89ab/preview	"	,
"2024-12-11":	"	https://drive.google.com/file/d/1NXtY2NzgBZVER6qP-3IwnsHue_kG4Gf_/preview	"	,
"2024-12-12":	"	https://drive.google.com/file/d/1QAdVDR10FnI30XISL6iGJg4t4TK2rOdl/preview	"	,
"2024-12-13":	"	https://drive.google.com/file/d/17JwFSBc-uy3h7Lf8hlqJT0mqRYBzFxXR/preview	"	,
"2024-12-14":	"	https://drive.google.com/file/d/1qYPGhoPW2GfPj_hInOF9av_IXZ5ciQf-/preview	"	,
"2024-12-15":	"	https://drive.google.com/file/d/1Y7RgqTSInyhhGEmuY7rAXzxEvDlRoRTb/preview	"	,
"2024-12-16":	"	https://drive.google.com/file/d/186FJNaf0ocySxdkSW4rps4m35DjvtUfN/preview	"	,
"2024-12-17":	"	https://drive.google.com/file/d/1VOUySRkGdJWkQkBDh6xnA4VBGG7JNQHx/preview	"	,
"2024-12-18":	"	https://drive.google.com/file/d/1QRp3kfGZnG95AV-xaibu3TGIq7-imdzI/preview	"	,
"2024-12-19":	"	https://drive.google.com/file/d/18iVGGrmIAJkP7lQspzmSdWVLqUuDeLBk/preview	"	,
"2024-12-20":	"	https://drive.google.com/file/d/1Ckn7WGKNRLRbsEEf0oabvwDWFIyYuInT/preview	"	,
"2024-12-21":	"	https://drive.google.com/file/d/1w1dcLMPz1CBmUTmGNaWwRXdETaiTV0CJ/preview	"	,
"2024-12-22":	"	https://drive.google.com/file/d/1R1OPS5zFBtnNQq_lFAPIczpaXY7eq1Tp/preview	"	,
"2024-12-23":	"	https://drive.google.com/file/d/1peggoZxZu2_zOGBy55gMuSiBdLYFLzxp/preview	"	,
"2024-12-24":	"	https://drive.google.com/file/d/1ZLXuVYV_jlDVajJQI99fzsALT6fUT8vn/preview	"	,
"2024-12-25":	"	https://drive.google.com/file/d/131UdCkovXD8njuL4WaMvFlMq_A6dlSLf/preview	"	,
"2024-12-26":	"	https://drive.google.com/file/d/1r5KFH9dJwodDvWxMz73n4yr8ybGxxnMb/preview	"	,
"2024-12-27":	"	https://drive.google.com/file/d/1kO6RGj8cuIkVzL2Q2YNnqZSQs4r31rvz/preview	"	,
"2024-12-28":	"	https://drive.google.com/file/d/1HGNzYTDPbdfjlNHlzuv-GIprufhG-gmq/preview	"	,
"2024-12-29":	"	https://drive.google.com/file/d/1Iq78WdDr9AEr8Ajw_cvxNCXbvFT0R4an/preview	"	,
"2024-12-30":	"	https://drive.google.com/file/d/1z_7sVCAVEUglG1zH-TEEk_ECpaio_ebR/preview	"	,
"2024-12-31":	"	https://drive.google.com/file/d/1qTqWdLlbeeYlgSEwlwHAlU0Zqz6k29Az/preview	"	,
"2025-01-01":	"	https://drive.google.com/file/d/1d1SlSSFDSatvRjDNWAYDkM42VaLvdiq9/preview	"	,
"2025-01-02":	"	https://drive.google.com/file/d/1TBu1qimZcrG4Ey6NMCHm_PW8HuHEr5Gz/preview	"	,
"2025-01-03":	"	https://drive.google.com/file/d/1qgJiAQ14x03JM-Yf019yj_dZkGJx1Hp6/preview	"	,
"2025-01-04":	"	https://drive.google.com/file/d/15vbFQ04370mrnbsk4ciXS3-GmyxCWyrV/preview	"	,
"2025-01-05":	"	https://drive.google.com/file/d/16rsPx37lxQL_kVWruKkmI_a7I08eEgX0/preview	"	,
"2025-01-06":	"	https://drive.google.com/file/d/1Oe-7YYXCWedLoz0wfiWYi8Fol5oc7irY/preview	"	,
"2025-01-07":	"	https://drive.google.com/file/d/1A_C-4-_PftwBf05OiP8MJ3yWhg8XjHIl/preview	"	,
"2025-01-08":	"	https://drive.google.com/file/d/1lTHkgu5GxpN45r9nB0ktDY-drkssPehr/preview	"	,
"2025-01-09":	"	https://drive.google.com/file/d/1OIBChFipCfMQpUi9XMjgwpGmOPadWD0s/preview	"	,
"2025-01-10":	"	https://drive.google.com/file/d/1s5fQZvXjpRQQX6hUSpbOaT_0beUdpbMh/preview	"	,
"2025-01-11":	"	https://drive.google.com/file/d/1JX6dX92154Osu6WYjyfFioZ4TzBH4DFm/preview	"	,
"2025-01-12":	"	https://drive.google.com/file/d/1uedj-fZYQZHAT2iF8wlQ9jPfsa1DWUiE/preview	"	,
"2025-01-13":	"	https://drive.google.com/file/d/1sC5oJMk39f4dk9BU9sWuXQ1rbsdaDHPT/preview	"	,
"2025-01-14":	"	https://drive.google.com/file/d/1tOnLBxbP6jUHCs6i-S3p8sIMi06b_32S/preview	"	,
"2025-01-15":	"	https://drive.google.com/file/d/1bz9Ocs4Kqsr4OChdziq2eJ6tVP7BUwcu/preview	"	,
"2025-01-16":	"	https://drive.google.com/file/d/1L3MriGYjA9fAj1KmsMhJKWpc4xFhIzwu/preview	"	,
"2025-01-17":	"	https://drive.google.com/file/d/1_XYelDmOOBqjxTTSgU45z2hzEFXhyoSF/preview	"	,
"2025-01-18":	"	https://drive.google.com/file/d/1xswCZmg71hqqD60AHyFBAPRHKoxa0inq/preview	"	,
"2025-01-19":	"	https://drive.google.com/file/d/1zkt-qlbwQP4FFT1-71VNw_lCkm7d2XGA/preview	"	,
"2025-01-20":	"	https://drive.google.com/file/d/1T5_YDAGNiI8zxqRYOIGYykz3B4eyDV6I/preview	"	,
"2025-01-21":	"	https://drive.google.com/file/d/19gYPxcofluWL3Z7yDfJ6VmXOb7eodejJ/preview	"	,
"2025-01-22":	"	https://drive.google.com/file/d/1a-r6OL5X321zoBMtxIbsaG-aNF7dYHwZ/preview	"	,
"2025-01-23":	"	https://drive.google.com/file/d/1t5iGUhMSQVE0JkSvzx6gQCmBBSagyWZt/preview	"	,
"2025-01-24":	"	https://drive.google.com/file/d/1EOiK1FI0frLmvQKyrVfW4tsuMMXXtvcP/preview	"	,
"2025-01-25":	"	https://drive.google.com/file/d/1QzuHu_u0YnYpklybzCt4aCECevP1u3C6/preview	"	,
"2025-01-26":	"	https://drive.google.com/file/d/1NkPjBVEKiC0bVv6ZwS7TnNIjvx8Qnz4O/preview	"	,
"2025-01-27":	"	https://drive.google.com/file/d/1mq1IOQpZ1s5Vm3esyV813s7kv5VRRbN4/preview	"	,
"2025-01-28":	"	https://drive.google.com/file/d/1RnHGEhKIm_SIj8eLITWwZVDJfirBBGcd/preview	"	,
"2025-01-29":	"	https://drive.google.com/file/d/1mbAf07VhzrQQ-OInMnuNKQtPBaO5ek6Z/preview	"	,
"2025-01-30":	"	https://drive.google.com/file/d/1Giw4q8YSXvhAUHJ8tUdTRvijZ120hXqs/preview	"	,
"2025-01-31":	"	https://drive.google.com/file/d/1D7TvWUdrhekbOvz8gWyii45U7ZxE8o-U/preview	"	,
"2025-02-01":	"	https://drive.google.com/file/d/1GMkk2CUtAQE5ymR_m9DVqRHkXYWd8zz6/preview	"	,
"2025-02-02":	"	https://drive.google.com/file/d/1iPLMubKGuPBW_maeJvm9UMcJmfKIYnGq/preview	"	,
"2025-02-03":	"	https://drive.google.com/file/d/1FTkdu53BmnvlKLEkjhRe8rsoOxJKt8Fg/preview	"	,
"2025-02-04":	"	https://drive.google.com/file/d/1F_91r_6C_tZrIr57v4-oWiC3_RcdUzr8/preview	"	,
"2025-02-05":	"	https://drive.google.com/file/d/1_ZUDAvRLH1ioq-I-JH0OC97x8Yvi7jnb/preview	"	,
"2025-02-06":	"	https://drive.google.com/file/d/11qhv2iZGYelcnPaFAkaQKUpKEefbYSn3/preview	"	,
"2025-02-07":	"	https://drive.google.com/file/d/1XDX-ljUcVGyeFzUVMbY9KTdErGcn3aMb/preview	"	,
"2025-02-08":	"	https://drive.google.com/file/d/14aSBdXVg8Ck-eMLpPunTz3Lv9IB1qVjp/preview	"	,
"2025-02-09":	"	https://drive.google.com/file/d/1tg-0QixAsZ1CHzwwagFnU116MK8WFU6L/preview	"	,
"2025-02-10":	"	https://drive.google.com/file/d/1_uQveXmNaNeu-w-c5taQNNXT7_Ce3i-D/preview	"	,
"2025-02-11":	"	https://drive.google.com/file/d/1VsG9gTuXDKibOel1QsLMOWiBJFc2TA48/preview	"	,
"2025-02-12":	"	https://drive.google.com/file/d/1yY1oRTLFDKPO-XCblbZ5iOvjeHbgW2kB/preview	"	,
"2025-02-13":	"	https://drive.google.com/file/d/1HxeRzhGN3-jFGq6mIs0l0aHo5NDv0dW-/preview	"	,
"2025-02-14":	"	https://drive.google.com/file/d/15z7C2fEYA7THCvUj_Y6WvlXA79lRU23P/preview	"	,
"2025-02-15":	"	https://drive.google.com/file/d/11sw6-IXQJ2ZWu8cc61qVYwIviLmKSNYe/preview	"	,
"2025-02-16":	"	https://drive.google.com/file/d/1CIVCiCj8UMTNXfmfoTgNGXW9dc9qno_R/preview	"	,
"2025-02-17":	"	https://drive.google.com/file/d/1ZFKaJVjU88-46ievno5d8NwgA78y6u2p/preview	"	,
"2025-02-18":	"	https://drive.google.com/file/d/1wQZoF4_bswpS1wVtM8LzJ6KQ8-rG4QMW/preview	"	,
"2025-02-19":	"	https://drive.google.com/file/d/1bN7UE7HR1QuZYZuJ1qLuW3W_bIyzSM1C/preview	"	,
"2025-02-20":	"	https://drive.google.com/file/d/1H0TT0uNDt1yrqCFJOWxDCb-mEUTiQsK8/preview	"	,
"2025-02-21":	"	https://drive.google.com/file/d/1z-4sWjvU5O1K-VVuYeOIc7M3LjHKTZ66/preview	"	,
"2025-02-22":	"	https://drive.google.com/file/d/1JRoq9WXCTt9pTQJnrvKwI9lKVGjW7roy/preview	"	,
"2025-02-23":	"	https://drive.google.com/file/d/1uAI2nHBVq3HoefGqhCR38JVMuprDiMYL/preview	"	,
"2025-02-24":	"	https://drive.google.com/file/d/1adwkl44cppzyzIgHkh_Ipgd9lAPQojo7/preview	"	,
"2025-02-25":	"	https://drive.google.com/file/d/1ZI1dNtMM4w7GmRqulcZtlBQq6cxhVarz/preview	"	,
"2025-02-26":	"	https://drive.google.com/file/d/1805CwOoWRvQ4l6nKvhutS5IWRR45LECg/preview	"	,
"2025-02-27":	"	https://drive.google.com/file/d/12ZUhcg4utqAES9cMf9sM3VfM5djmbHib/preview	"	,
"2025-02-28":	"	https://drive.google.com/file/d/1vs2uWrNhUurYmyLcOAbipqurNmuswayz/preview	"	,
"2025-03-01":	"	https://drive.google.com/file/d/1QcmLne5cr_Qtlsr0TSSsO3as18km4vlw/preview	"	,
"2025-03-02":	"	https://drive.google.com/file/d/16-Tuacn3OJpSM8rRL-0eQ48374YvtHIn/preview	"	,
"2025-03-03":	"	https://drive.google.com/file/d/1ZXKjxdq9kY6foMWBQlfOwWCrLGjWUvFC/preview	"	,
"2025-03-04":	"	https://drive.google.com/file/d/1YoMEbevBtLuYlThAwZkdaInRVNIXfvZz/preview	"	,
"2025-03-05":	"	https://drive.google.com/file/d/1Cokqa4DwvNgqLGHQO3SJRtVBK3oTnBnV/preview	"	,
"2025-03-06":	"	https://drive.google.com/file/d/11wOC5zRcFXcyg5Xeb543DMBFjLRJqZoU/preview	"	,
"2025-03-07":	"	https://drive.google.com/file/d/1UNUWBR2YfDn5KlZ6xMCO3HrSAfMlK37t/preview	"	,
"2025-03-08":	"	https://drive.google.com/file/d/1uFXhh2q8NZVMZpOzme1n8kA1_vCYGetT/preview	"	,
"2025-03-09":	"	https://drive.google.com/file/d/1jVX1Fe1cm25fgql4bHXvXVzqpglLK322/preview	"	,
"2025-03-10":	"	https://drive.google.com/file/d/1xYzIesBWNCh308WV3rdvAEGHNDIXIEgg/preview	"	,
"2025-03-11":	"	https://drive.google.com/file/d/1HjJXzD-X3crch0yY-EJg754ytksZXsz9/preview	"	,
"2025-03-12":	"	https://drive.google.com/file/d/1PgNLVjJXzMLdw8dL14gSVd6-lPrbhDlo/preview	"	,
"2025-03-13":	"	https://drive.google.com/file/d/1zzAjGuUbgfydrZKX3CtBebRzrAewMonM/preview	"	,
"2025-03-14":	"	https://drive.google.com/file/d/1NfytG-3vDM9qXnlJ30DPekaw5R1XZxna/preview	"	,
"2025-03-15":	"	https://drive.google.com/file/d/1QMa-qeq7w0xGVGiZ-fIZPjZ0-0iiTC42/preview	"	,
"2025-03-16":	"	https://drive.google.com/file/d/1nDKx27EZH_UvuqMQBgKvQTQMzFTKadb7/preview	"	,
"2025-03-17":	"	https://drive.google.com/file/d/1TgpBmyfrfIr2jEdMt3BxsdkGuq6lciBP/preview	"	,
"2025-03-18":	"	https://drive.google.com/file/d/1XGqvNV59prpHEJWulF0yYAaERrefFQRc/preview	"	,
"2025-03-19":	"	https://drive.google.com/file/d/1AW0lPL8h8AVWz7Zd57uYgzww17FCUmyI/preview	"	,
"2025-03-20":	"	https://drive.google.com/file/d/1jBOi65bR1Tv43-anEcV6IJu8VHl6AFIQ/preview	"	,
"2025-03-21":	"	https://drive.google.com/file/d/1cEUd9Hg7oPsQQsaJj8INSa3c5fMw1W24/preview	"	,
"2025-03-22":	"	https://drive.google.com/file/d/17hi2luPBcP_Dm2XKu5te1Vj3f7XiwBYh/preview	"	,
"2025-03-23":	"	https://drive.google.com/file/d/1LtVeZvlBH3ae67bsMTEScQSz-ysTC4vm/preview	"	,
"2025-03-24":	"	https://drive.google.com/file/d/1CbBUkSMEx9w9ELLkV-TLH5zqCc7eYlD5/preview	"	,
"2025-03-25":	"	https://drive.google.com/file/d/1BTDIQnKX81lgI9iOiDH0THz_LJH3-ljt/preview	"	,
"2025-03-26":	"	https://drive.google.com/file/d/197cc44agNX-a6FuoETcnt02Yl1KPaDS9/preview	"	,
"2025-03-27":	"	https://drive.google.com/file/d/1aPkMdCZfrQfq1d_D_80DuJUeI_JqNL1L/preview	"	,
"2025-03-28":	"	https://drive.google.com/file/d/1I-evRIWhUGzsW09pu7VRonc0Ne1Q546S/preview	"	,
"2025-03-29":	"	https://drive.google.com/file/d/1DCmyb3FBJE86sghOaJ76AegYaCe9tIUl/preview	"	,
"2025-03-30":	"	https://drive.google.com/file/d/1XS-_1X2bfac73FgZWi_Y8tfHesuIi_Ku/preview	"	,
"2025-03-31":	"	https://drive.google.com/file/d/12FnCeDC3eBQVS-quPExc9Dd_3A9sXBvn/preview	"	,
"2025-04-01":	"	https://drive.google.com/file/d/1vv1VLzIV24dquzIC8w8H-t0EzHsjM6dF/preview	"	,
"2025-04-02":	"	https://drive.google.com/file/d/1zmb5FuuBGyrpftOKQf-f7QKcAjBOBk8c/preview	"	,
"2025-04-03":	"	https://drive.google.com/file/d/1P_bjsMzjvmlGcWL7t_PLXv4zIMlEf8Lh/preview	"	,
"2025-04-04":	"	https://drive.google.com/file/d/1PrhWEPIUaPhIwvEyiKmbcfwRIqHWTamJ/preview	"	,
"2025-04-05":	"	https://drive.google.com/file/d/1sNmIOwy1CVtu2Apm-VX80P_tYshrrUVV/preview	"	,
"2025-04-06":	"	https://drive.google.com/file/d/1SKzMLVWWsK6JfvnH5MX5bORShUFq9_t7/preview	"	,
"2025-04-07":	"	https://drive.google.com/file/d/1pqnxHBtJh2ghnsgtEahJs6qQ1e3L36w9/preview	"	,
"2025-04-08":	"	https://drive.google.com/file/d/1d4OJEK3UsH2w7jTGp5ShbB7EJTciNeA7/preview	"	,
"2025-04-09":	"	https://drive.google.com/file/d/1b9UALYfDjVCGW-jNtENDIrQ2LCD4RTRQ/preview	"	,
"2025-04-10":	"	https://drive.google.com/file/d/1-zRbQx3KyN2RNeZislMF4c35MfwnaOmx/preview	"	,
"2025-04-11":	"	https://drive.google.com/file/d/1y41_JDGRRXmVAUoXzVbjL9paPk_o5taY/preview	"	,
"2025-04-12":	"	https://drive.google.com/file/d/1YrmsweLUdLnfRs4rLXZKHK9EWK5UGNIC/preview	"	,
"2025-04-13":	"	https://drive.google.com/file/d/10q5cm0foOc79zH0elgYTOw3OxkM8cQQE/preview	"	,
"2025-04-14":	"	https://drive.google.com/file/d/10yCCMgWAMoc8UPwUq8uKFQAUls3sDtXq/preview	"	,
"2025-04-15":	"	https://drive.google.com/file/d/1PxWhBmSVJ3bheZvB9x7VY8BGOckJZ2dN/preview	"	,
"2025-04-16":	"	https://drive.google.com/file/d/1K5pGXACo2wrVD4Ipq_pYsCaltyEjQRtP/preview	"	,
"2025-04-17":	"	https://drive.google.com/file/d/1ujKLxExAz3V47cGIZ6ge_ctZCzBILKVO/preview	"	,
"2025-04-18":	"	https://drive.google.com/file/d/17Ic_YxIuV5_m2lsvz39xRfvkmUa2nvUS/preview	"	,
"2025-04-19":	"	https://drive.google.com/file/d/1iUT3vLM82JF0hvGeaJqAj_rK03TWIs-k/preview	"	,
"2025-04-20":	"	https://drive.google.com/file/d/1M0F7wDeX9Ib3tzIPlBg2akzf_C7Gm1RL/preview	"	,
"2025-04-21":	"	https://drive.google.com/file/d/1QreuJRzH4NRPEtWX68Wquki8XLfeJpvU/preview	"	,
"2025-04-22":	"	https://drive.google.com/file/d/11STQoz_kXqsE60ECFqIozG1RNxsAB7uS/preview	"	,
"2025-04-23":	"	https://drive.google.com/file/d/1NLLaRR2wob5ITmBV488FEqNGMMw6TI9h/preview	"	,
"2025-04-24":	"	https://drive.google.com/file/d/1BukGwBsfap70KaINEpGd7txh6xuV2t5L/preview	"	,
"2025-04-25":	"	https://drive.google.com/file/d/1wGf1mOtXocZb4CK47kAJDYvkKuZ9KzEU/preview	"	,
"2025-04-26":	"	https://drive.google.com/file/d/1tSbSVAmdxd07FK3vaAWNd5D5LSHyHvuG/preview	"	,
"2025-04-27":	"	https://drive.google.com/file/d/1JGtj_YM1YkgloCdk4NwFMeQT-3BRGUfR/preview	"	,
"2025-04-28":	"	https://drive.google.com/file/d/1naTOZDE6XZXT9XidBCvZrI1o_o8iDURf/preview	"	,
"2025-04-29":	"	https://drive.google.com/file/d/14iPpsfmGladFrEGQ4yA_3sAlg4-_KhCa/preview	"	,
"2025-04-30":	"	https://drive.google.com/file/d/1-eqP11iozrEcoSPRsF1KAalXF8kjuAy9/preview	"	,
"2025-05-01":	"	https://drive.google.com/file/d/1PQFBqbjVE6tRevB1IM3dZ7HZHo-hLg9g/preview	"	,
"2025-05-02":	"	https://drive.google.com/file/d/10ES_8AIY2gcAaLJqfeR78IviZzKCDfuT/preview	"	,
"2025-05-03":	"	https://drive.google.com/file/d/1R8qNR-jfSf7RBfz6hrhYKPk3-yLM6hXZ/preview	"	,
"2025-05-04":	"	https://drive.google.com/file/d/1xGnJozaItZjwZOckMEd2AYn6AWibkz1D/preview	"	,
"2025-05-05":	"	https://drive.google.com/file/d/1SmMZ7b2Os8SjpwAGWNEoz-k3DmMbs_oK/preview	"	,
"2025-05-06":	"	https://drive.google.com/file/d/1fNEZH_VPqQGpC5Dmn0KHXnmbOsMhaxh3/preview	"	,
"2025-05-07":	"	https://drive.google.com/file/d/1IExnyzIKrqsr3GcKLHVk7Fbs1I4cnQYu/preview	"	,
"2025-05-08":	"	https://drive.google.com/file/d/1kP5TG_W8F6ZrUOWTnNJVxEJmco553Zr1/preview	"	,
"2025-05-09":	"	https://drive.google.com/file/d/1Q0zdQvlrgM4CWgVPueAu6nQ7zdu605Ni/preview	"	,
"2025-05-10":	"	https://drive.google.com/file/d/1IlwZfduIxMSiUPRoRB2ROCMRa_h99txW/preview	"	,
"2025-05-11":	"	https://drive.google.com/file/d/14BBHoSdCRoEsO8TO67ynxMGOFrLxaUhx/preview	"	,
"2025-05-12":	"	https://drive.google.com/file/d/1NLI7Gizs8bjSaN59-i7OXyhsplZHzNkf/preview	"	,
"2025-05-13":	"	https://drive.google.com/file/d/1P0XQfpy8JPbkp6G1blt5NOHb7wMxsE27/preview	"	,
"2025-05-14":	"	https://drive.google.com/file/d/1IeWg21fLxCQmVLl5ZmahyzcoTa4iIsXw/preview	"	,
"2025-05-15":	"	https://drive.google.com/file/d/1kOdX3Aaprgvz71sTd_ihhsU6Fhynpf4I/preview	"	,
"2025-05-16":	"	https://drive.google.com/file/d/159Dh7VhxOJb_orU7rpNuHxVYW_0gjX-a/preview	"	,
"2025-05-17":	"	https://drive.google.com/file/d/1LMsMUq6dWYKL2lEWoKpUjslmn3sjSN8a/preview	"	,
"2025-05-18":	"	https://drive.google.com/file/d/1mJenyu-NPVnjNPmz1dJmrBrzNpZb3p1G/preview	"	,
"2025-05-19":	"	https://drive.google.com/file/d/1X8hFvV-vqt3gUW2u65oiIP_sr5KjfWG8/preview	"	,
"2025-05-20":	"	https://drive.google.com/file/d/1jCRhrQAZHe7etmkH7ORjDySUr8x-QHcL/preview	"	,
"2025-05-21":	"	https://drive.google.com/file/d/1JJl5lOF4a3DQNPGxWZDUYtGLD9kp0xNX/preview	"	,
"2025-05-22":	"	https://drive.google.com/file/d/1HgZGBUJUQeyqwXMAfnzUE8-GrTtPbE49/preview	"	,
"2025-05-23":	"	https://drive.google.com/file/d/1VXCBpij2VPnjBzdBkodBeLnR73peYF8e/preview	"	,
"2025-05-24":	"	https://drive.google.com/file/d/1PYez3v-FHXG8-rddkSG4IOkCvKn1-nH_/preview	"	,
"2025-05-25":	"	https://drive.google.com/file/d/16QfFyrJroX3F857YTxR47kysPM6knC5j/preview	"	,
"2025-05-26":	"	https://drive.google.com/file/d/1S5VFSI-wHMUp7OoJqydkKMqaJbsvfqH_/preview	"	,
"2025-05-27":	"	https://drive.google.com/file/d/1Oty2HGYONJe0GVYRfOOR50bOciMG3Hgd/preview	"	,
"2025-05-28":	"	https://drive.google.com/file/d/1whYJ2zsZbt8nblLiSNXKRSj6nxXT826g/preview	"	,
"2025-05-29":	"	https://drive.google.com/file/d/1w6ybpttiJoCzafD_u-39oxB3OzgUg0IN/preview	"	,
"2025-05-30":	"	https://drive.google.com/file/d/1AFBEA_Nx7yPrUF9d_qdM5MqH0IPXYz-d/preview	"	,
"2025-05-31":	"	https://drive.google.com/file/d/1pzhKMbaLCwudnMo0nxmGlYjLHbztnkgv/preview	"	,
"2025-06-01":	"	https://drive.google.com/file/d/1dY1lYTWbGWU1gQkht12uzyEihEM0Ob5H/preview	"	,
"2025-06-02":	"	https://drive.google.com/file/d/1Mp3QwoZqk2cYmLOHf3-W_pmP3-9BjpDs/preview	"	,
"2025-06-03":	"	https://drive.google.com/file/d/1byBv_hzxD_VWXgiThyaq4w4vyYe3igku/preview	"	,
"2025-06-04":	"	https://drive.google.com/file/d/1E_AOeRw8UcKkFe9xr0tDQpVqjvarTk9o/preview	"	,
"2025-06-05":	"	https://drive.google.com/file/d/14dMnQqIURDRLSIzK4O0jRsPqba_DHmwh/preview	"	,
"2025-06-06":	"	https://drive.google.com/file/d/1kGgGh4s5IR2vDnyXbdAYMR_5NTUVXPZx/preview	"	,
"2025-06-07":	"	https://drive.google.com/file/d/1MB-qh4yrJb1liq3P8Bx6W16_6K6L4fJ0/preview	"	,
"2025-06-08":	"	https://drive.google.com/file/d/12MuTUmtTULtZNORfoW-DiDZxjvTJ1fQ6/preview	"	,
"2025-06-09":	"	https://drive.google.com/file/d/1WOm5AFWHI5sKboWGtqrv5n7ZmL9CN1cm/preview	"	,
"2025-06-10":	"	https://drive.google.com/file/d/1RO0_8Mu6SPz2edoL2UVSYuYUr82CZu9e/preview	"	,
"2025-06-11":	"	https://drive.google.com/file/d/1iVvcbGCTM76to1yJEkLzy871ZlzIr3lw/preview	"	,
"2025-06-12":	"	https://drive.google.com/file/d/1ux4eG7X-8hNC6StMxoHt5USAagBk0TAn/preview	"	,
"2025-06-13":	"	https://drive.google.com/file/d/1owYq9J2YA6ZB91-InHFaWQlcvGCh07ZU/preview	"	,
"2025-06-14":	"	https://drive.google.com/file/d/11NQow4r6Y1KLJrS18RrNB4kxRuCowOUt/preview	"	,
"2025-06-15":	"	https://drive.google.com/file/d/1aKCoQkVaGxT8i2pSehBKB8amjfVzQOCH/preview	"	,
"2025-06-16":	"	https://drive.google.com/file/d/11tupgLfMVroIuYcnHJ6lu7Nfs24K9g3M/preview	"	,
"2025-06-17":	"	https://drive.google.com/file/d/15PvUfNUad1aVvb0a4bNt52LnxW8HDO_5/preview	"	,
"2025-06-18":	"	https://drive.google.com/file/d/1GcFHqVZ6-cLwJEMSsf6aqtfjaoSYJKIN/preview	"	,
"2025-06-19":	"	https://drive.google.com/file/d/1up8pOPN8RTzBeLJPvXHfLUoevY-slBmU/preview	"	,
"2025-06-20":	"	https://drive.google.com/file/d/1qnJtvamOW0u5aDcGW1Zp-_SXTZh1RknO/preview	"	,
"2025-06-21":	"	https://drive.google.com/file/d/1SiRhrXl7mB6CpyuNgFPzh6Vqr0DUjnKU/preview	"	,
"2025-06-22":	"	https://drive.google.com/file/d/1j6nWVHHdKL7l_DO_p0vaRfu_bNhLdrM5/preview	"	,
"2025-06-23":	"	https://drive.google.com/file/d/1c-OEDVWsB1d5b24fk6BC8CRTE_BqDJym/preview	"	,
"2025-06-24":	"	https://drive.google.com/file/d/1KGt2nGwBxyX_Cz41qc8ySpk1O9Unky3T/preview	"	,
"2025-06-25":	"	https://drive.google.com/file/d/1klQe7rZNtgy7_Tf6acBVmVgrz-VACOKq/preview	"	,
"2025-06-26":	"	https://drive.google.com/file/d/1PY4zesCUTD5rTXDJAFtL5MQRBKrdI9uV/preview	"	,
"2025-06-27":	"	https://drive.google.com/file/d/1t5Dbz1cS8GbRWwLxT6HPywTC1y24-wcS/preview	"	,
"2025-06-28":	"	https://drive.google.com/file/d/188ywrQx0u8_HY4tor2ASparNwyf0ze96/preview	"	,
"2025-06-29":	"	https://drive.google.com/file/d/16BXSPiWBbh8EOLazwuLeHkOXYVqj6UZ1/preview	"	,
"2025-06-30":	"	https://drive.google.com/file/d/12ukDheECL6Q2PPZh7BCuGuvMMgcbZ4wi/preview	"	,
"2025-07-01":	"	https://drive.google.com/file/d/1cbwnMrU72NGAYM3CdHu3Je81DVnca_zA/preview	"	,
"2025-07-02":	"	https://drive.google.com/file/d/1MK4C7sD4X-kcfDeL_to4UZeLkSS3p_8K/preview	"	,
"2025-07-03":	"	https://drive.google.com/file/d/1tmBWIWHiB6eqLEWyg93IEdU8pmTKYhy0/preview	"	,
"2025-07-04":	"	https://drive.google.com/file/d/1fdYN-l2uyfQDBMiAUhDgOSS8w1t-cjuJ/preview	"	,
"2025-07-05":	"	https://drive.google.com/file/d/1XtWGk-zbOJpa47pcy5DZ4cUBruxUkJlX/preview	"	,
"2025-07-06":	"	https://drive.google.com/file/d/1joUotzI95Zzu6fxIANwF6aPS5AVuvLMK/preview	"	,
"2025-07-07":	"	https://drive.google.com/file/d/1y4eOEfVuTk75fmXu_3YkG95ApTTZ42EM/preview	"	,
"2025-07-08":	"	https://drive.google.com/file/d/1wyTeFIiZF8Xi0d7y3r0Kms4YIgXW35np/preview	"	,
"2025-07-09":	"	https://drive.google.com/file/d/1bdcW2-u6l-28pZ-D0DQieltHhMUKx3Jp/preview	"	,
"2025-07-10":	"	https://drive.google.com/file/d/1wwKsTUqueBI4WvKDCFaOYcsC3PfJE1AB/preview	"	,
"2025-07-11":	"	https://drive.google.com/file/d/1_1pQ7hfOqI98XIdk0obe79BS3bDQw577/preview	"	,
"2025-07-12":	"	https://drive.google.com/file/d/1maCJDDnhRghS9vLoj_QOr-FSznHeZ_AT/preview	"	,
"2025-07-13":	"	https://drive.google.com/file/d/1gwna0y12n2dPzcif4xaYbTCSgQZM1SlQ/preview	"	,
"2025-07-14":	"	https://drive.google.com/file/d/1UlabJqANqUhYSa8DLQJuiDwEYvh5CBmz/preview	"	,
"2025-07-15":	"	https://drive.google.com/file/d/1MDMNLSftYbYQnSWmTovz3FINzdf9Tr5z/preview	"	,
"2025-07-16":	"	https://drive.google.com/file/d/1dsQ9ypYo5dYMcmEaeShG6ETvpoPD5QeP/preview	"	,
"2025-07-17":	"	https://drive.google.com/file/d/1GNiknj29MTTrSFm-YmSKtbHMarIeqsPj/preview	"	,
"2025-07-18":	"	https://drive.google.com/file/d/1iozee2K8DfQfVSHBC9H5kQL5ROrsjaou/preview	"	,
"2025-07-19":	"	https://drive.google.com/file/d/17VbhiF9hCKsEI4erzbFeJR3188J2RbqQ/preview	"	,
"2025-07-20":	"	https://drive.google.com/file/d/1uDnNo_olGPDqg7Gt0eVYkqNGr8cXAmEa/preview	"	,
"2025-07-21":	"	https://drive.google.com/file/d/1-N7VFUXm8uOuJ2fQboiZKgG2sSnsabgj/preview	"	,
"2025-07-22":	"	https://drive.google.com/file/d/1TBY8Fp5JrN5PTy9ZJnVQ5iTAygh8BhXg/preview	"	,
"2025-07-23":	"	https://drive.google.com/file/d/1oupz9hKIX9FXDoCSAyjS-d6NEGvxzgfD/preview	"	,
"2025-07-24":	"	https://drive.google.com/file/d/1Zx4fSv4cX8eTyrU_5j4X8jBtCOPlU86Y/preview	"	,
"2025-07-25":	"	https://drive.google.com/file/d/1UpKQNiUQe_Kp7vvBKr6bq1Z-I57vdjOM/preview	"	,
"2025-07-26":	"	https://drive.google.com/file/d/1yfbv6iWsKWjuF0LM2ys8cYpb4lr8cT75/preview	"	,
"2025-07-27":	"	https://drive.google.com/file/d/1KVCMvqKhrw5eJ_f8cWva5P8FIA18Bc3Y/preview	"	,
"2025-07-28":	"	https://drive.google.com/file/d/1f9cP9dmRkrQVLSHiinmFFmLu_NWtgBN2/preview	"	,
"2025-07-29":	"	https://drive.google.com/file/d/1GTKZS6uW-q0cK8-VAF-NrP0JGq5WV5s0/preview	"	,
"2025-07-30":	"	https://drive.google.com/file/d/1Vekmz83DRTdMKxtm0BvGGxc-ZNSDrqbU/preview	"	,
"2025-07-31":	"	https://drive.google.com/file/d/1GsUG8Tam0IzjAOmnb3MhyN-QWdQeBVH9/preview	"	,
"2025-08-01":	"	https://drive.google.com/file/d/1wu7YdhC8VNomNLECY6zjYlIYmW_TpUbF/preview	"	,
"2025-08-02":	"	https://drive.google.com/file/d/1aJO403LifJO24zQr6aCnTnpmFoGjRA7q/preview	"	,
"2025-08-03":	"	https://drive.google.com/file/d/1jmDfsGidaHD45BPdkddZJhCfGS16cieV/preview	"	,
"2025-08-04":	"	https://drive.google.com/file/d/1i-jiFSHSTB4tBRZbbcQp-4omlnlGrFJ2/preview	"	,
"2025-08-05":	"	https://drive.google.com/file/d/1jEv1j6AhySxGM59tuRPJf2YsQezUA22K/preview	"	,
"2025-08-06":	"	https://drive.google.com/file/d/1L5uWek6f1ZkaCf5s4ATDqU8lYURTIW8d/preview	"	,
"2025-08-07":	"	https://drive.google.com/file/d/1cAxfZYWWIeKhD4YIOWlbhFHAjePw3K4_/preview	"	,
"2025-08-08":	"	https://drive.google.com/file/d/1iuLN3jISG20NTdLpqf7DNNEoc1_7wERW/preview	"	,
"2025-08-09":	"	https://drive.google.com/file/d/1vmxxrmEnqCSQOpJpQkfCwkoJ0iqeSqoY/preview	"	,
"2025-08-10":	"	https://drive.google.com/file/d/1vmW2dBEOEmdKG2hMInudwC5UELFAGRwa/preview	"	,
"2025-08-11":	"	https://drive.google.com/file/d/1zWUVP2VRWf9bf_padqSyDXJauW_tNGlu/preview	"	,
"2025-08-12":	"	https://drive.google.com/file/d/1WpDQ79Gn2VgJQ-GzhX6x3HMduYtbkjze/preview	"	,
"2025-08-13":	"	https://drive.google.com/file/d/1vm_3sdprKgmdpt7pZ85N3uVjqR7tYcXL/preview	"	,
"2025-08-14":	"	https://drive.google.com/file/d/1aMm5j9K5uJXTmT9C-DvcLsWRChJEV-JP/preview	"	,
"2025-08-15":	"	https://drive.google.com/file/d/16SOdmgl-a0_G5dlU44UZ3KgrCXBP4CDc/preview	"	,
"2025-08-16":	"	https://drive.google.com/file/d/1NJzXDGtEcyHHekdtxQBKCmx1GGl0mWYC/preview	"	,
"2025-08-17":	"	https://drive.google.com/file/d/17DdaxWRcFdRxJXNlaHhlxtUi4h9y4P8L/preview	"	,
"2025-08-18":	"	https://drive.google.com/file/d/1_mA_AQZV7_Xt6GdIeE_loOr4aMWV6ZVE/preview	"	,
"2025-08-19":	"	https://drive.google.com/file/d/1f1MAylnMyZh_U6cPsaIFCaFxGSwhhDw7/preview	"	,
"2025-08-20":	"	https://drive.google.com/file/d/1tqkGynjfKtQ_39zTmD4TZFSK86of1ezx/preview	"	,
"2025-08-21":	"	https://drive.google.com/file/d/1IRol0OUDlZ8tQ0DENuHfaaoFH2QVS09s/preview	"	,
"2025-08-22":	"	https://drive.google.com/file/d/1-TE7epDgmFLcWMq2-hH_cjt2IOs_ClRL/preview	"	,
"2025-08-23":	"	https://drive.google.com/file/d/16uu8VGq9toW0ArKh8bCjlkHkqKrpR3ke/preview	"	,
"2025-08-24":	"	https://drive.google.com/file/d/1jYh6nmHoqgsYiAenEAn0owkegrLgf1zW/preview	"	,
"2025-08-25":	"	https://drive.google.com/file/d/1dHCt1hi0P58bLYcg59c8UBKAe-L3DgMA/preview	"	,
"2025-08-26":	"	https://drive.google.com/file/d/19jaztlaY__mIMXccF1yIfmZ5WocCqUW6/preview	"	,
"2025-08-27":	"	https://drive.google.com/file/d/1vPpMk6SUog6VB7ayGRquxzlc5EMx2l35/preview	"	,
"2025-08-28":	"	https://drive.google.com/file/d/1S5DEFmGkhBTvPy2gl_5ZcfWe7QWt_F4J/preview	"	,
"2025-08-29":	"	https://drive.google.com/file/d/1GFDYZB1xu3Pf70s-15MzqozgnSkx2ETy/preview	"	,
"2025-08-30":	"	https://drive.google.com/file/d/1yzqdHd34lYERxjvtcC2G7p08eQ-vt5-O/preview	"	,
"2025-08-31":	"	https://drive.google.com/file/d/1dBxC5b3KnjgVHSOEJKhY78_YSsXzBAdA/preview	"	,
"2025-09-01":	"	https://drive.google.com/file/d/12tSG3IECZ8O4vAY4WqZTtZGg6INCeHm_/preview	"	,
"2025-09-02":	"	https://drive.google.com/file/d/1dEapSvj38RXCNqj-fIRwNsFRgCeLwhas/preview	"	,
"2025-09-03":	"	https://drive.google.com/file/d/1RFdzBtQFGW51hLKKgZimRmmp5SYxw8NC/preview	"	,
"2025-09-04":	"	https://drive.google.com/file/d/1T6735pe1xSPwsUi5a2XCZ8rMP8s3JOht/preview	"	,
"2025-09-05":	"	https://drive.google.com/file/d/1vpkOakoGgXLTVBqEbiRrSMoPXBLq3r0k/preview	"	,
"2025-09-06":	"	https://drive.google.com/file/d/1KBeg2ErfSc7xDkaGmt-2ojYbtu0hcLUY/preview	"	,
"2025-09-07":	"	https://drive.google.com/file/d/1TlFn9wIvmjB_R8e47PBENOgkVEoJL_WP/preview	"	,
"2025-09-08":	"	https://drive.google.com/file/d/1IVbwJoajxKNdyNygT0lPssHocsBk52bB/preview	"	,
"2025-09-09":	"	https://drive.google.com/file/d/1TRKhilsbQZz7vcKarqUrBxv4u-AUnzeF/preview	"	,
"2025-09-10":	"	https://drive.google.com/file/d/14A9rBlqWpIgR5CCJzeEKMLF3AqVejaWE/preview	"	,
"2025-09-11":	"	https://drive.google.com/file/d/1Q8gNfT9XEsH00ekr7jnji6kR__8J2Jua/preview	"	,
"2025-09-12":	"	https://drive.google.com/file/d/14gjxLP6sR-ISRlsuh2OKspKUeI1lQNCB/preview	"	,
"2025-09-13":	"	https://drive.google.com/file/d/1IWTqTa2sbsGvIoJJ4FpKV3d8-sBrpnM0/preview	"	,
"2025-09-14":	"	https://drive.google.com/file/d/1_ulwngJMgiVr5shgLxcd3bHUIpYKeHQP/preview	"	,
"2025-09-15":	"	https://drive.google.com/file/d/1Ho2fU2nsa6h1q8oqEO_dyxKsQYvHJ3b-/preview	"	,
"2025-09-16":	"	https://drive.google.com/file/d/1ZXn4Xv2E3KVM7-LTZnYUCnGa8nFQl7sI/preview	"	,
"2025-09-17":	"	https://drive.google.com/file/d/1P13ggGE1L33XsO-H7xTw4YbSWXQYtsNQ/preview	"	,
"2025-09-18":	"	https://drive.google.com/file/d/1xfH2objNWww0zwQOJU6aklJxSoLQjU0_/preview	"	,
"2025-09-19":	"	https://drive.google.com/file/d/1gRsLznWVyOJINEmI20qAstKnht4juT58/preview	"	,
"2025-09-20":	"	https://drive.google.com/file/d/12wFLV-VXyq5cc5ERGkxpDD4MTYwUWii5/preview	"	,
"2025-09-21":	"	https://drive.google.com/file/d/160DjtJW20Fj0pTd-ENK0rtAjj-52Mtvc/preview	"	,
"2025-09-22":	"	https://drive.google.com/file/d/1HNbsoH7RgDBKxzqVf9z3Qpb6wUiA0Mqn/preview	"	,
"2025-09-23":	"	https://drive.google.com/file/d/1u1axgX9D0fnt3L2HTKsiJzIVFx0_WTiV/preview	"	,
"2025-09-24":	"	https://drive.google.com/file/d/1QjnHQhCggoBCmleEAIzhl_kL_pSM3lgI/preview	"	,
"2025-09-25":	"	https://drive.google.com/file/d/1Off6iqr-zyahqTTqZzx39wIOd4420YID/preview	"	,
"2025-09-26":	"	https://drive.google.com/file/d/1XS6lu0Uy6LQCbvV5Ql397cuUgJAxLbVA/preview	"	,
"2025-09-27":	"	https://drive.google.com/file/d/1-ypkBtn-z6RnpyWNrVhfgdYc1m1zdyZD/preview	"	,
"2025-09-28":	"	https://drive.google.com/file/d/1M5FaPA6qNOX5XwoC__S07sAtlkxAFFMX/preview	"	,
"2025-09-29":	"	https://drive.google.com/file/d/1VO5JprY3VdhRS7RwOFJLiCQ4VrQ4Q18b/preview	"	,
"2025-09-30":	"	https://drive.google.com/file/d/1tt6nj4Gra5CDytLlyT0jm695StFa5tkK/preview	"	,
"2025-10-01":	"	https://drive.google.com/file/d/1d7Zn9iZ9pLVDGzp2LukYDR2XwvyW3xbU/preview	"	,
"2025-10-02":	"	https://drive.google.com/file/d/1mXPjZUlGTzB_MTEWQ9YpD9hec9NZVq1v/preview	"	,
"2025-10-03":	"	https://drive.google.com/file/d/1TqLO4eaO-VnBCmJJeDn_h1iCqjXllgBG/preview	"	,
"2025-10-04":	"	https://drive.google.com/file/d/1OBqk-IWcC0zJWvWbzJUfvMLv7EMKKQEg/preview	"	,
"2025-10-05":	"	https://drive.google.com/file/d/14cmyQXJBDguXJqKfRiqHbcT45MuN-vIZ/preview	"	,
"2025-10-06":	"	https://drive.google.com/file/d/1izLYvo1vjehygeZWFiPdRkoaTX9DTo6i/preview	"	,
"2025-10-07":	"	https://drive.google.com/file/d/1Jv0tUdM1Q6V-UuSQcUIvVGJZvGVbZMuK/preview	"	,
"2025-10-08":	"	https://drive.google.com/file/d/13xF2w5WGEyPk1q9xDKsxOnLtUkUv1Jsf/preview	"	,
"2025-10-09":	"	https://drive.google.com/file/d/1Bjuo3F3VNbEiUytIWr7fxHRNRxrL-uns/preview	"	,
"2025-10-10":	"	https://drive.google.com/file/d/1H8lIf_a1vHiFrBwKMkakkkZGx7c7cPpZ/preview	"	,
"2025-10-11":	"	https://drive.google.com/file/d/1SutMpW_ibPVWp6SeZk-kqdNWtHCxpIVK/preview	"	,
"2025-10-12":	"	https://drive.google.com/file/d/1XMWa-l-EdIIgybLt1tq024y8-T-I1NjG/preview	"	,
"2025-10-13":	"	https://drive.google.com/file/d/1sOTKVZEElMN4KDg6QFizNNSM5hVL52ID/preview	"	,
"2025-10-14":	"	https://drive.google.com/file/d/15jA9gmfoTU5dvcp7-VdlmC-ScpyYWDnT/preview	"	,
"2025-10-15":	"	https://drive.google.com/file/d/1iwNraYcH8TTPMMpHjfJ5wKpqomV5uRAK/preview	"	,
"2025-10-16":	"	https://drive.google.com/file/d/1tT_gfwkmqkVOr7w4a0ZZv4AH3Yl-n0Qo/preview	"	,
"2025-10-17":	"	https://drive.google.com/file/d/1xwzDGIWFo5KxHIz4CWjbTvrgjT-6Kf2-/preview	"	,
"2025-10-18":	"	https://drive.google.com/file/d/1swlQjNUfiMHDWTjclBdcg834IJVFK42S/preview	"	,
"2025-10-19":	"	https://drive.google.com/file/d/187D1rNJx_IaUH_zTptB9IuT9gXnhk9ss/preview	"	,
"2025-10-20":	"	https://drive.google.com/file/d/1xu_0DVYE6OhuWbVC4-d4YuXwKd0DR7ex/preview	"	,
"2025-10-21":	"	https://drive.google.com/file/d/1JqW70w5W6IIGiuQgBu51VoFlNUx8-GL8/preview	"	,
"2025-10-22":	"	https://drive.google.com/file/d/1shWGrBKb9XQ1jEGO18U0wAiSqRU7ndLV/preview	"	,
"2025-10-23":	"	https://drive.google.com/file/d/1VIJfx9St_JhWnqQHONnkLdFcngJokZDl/preview	"	,
"2025-10-24":	"	https://drive.google.com/file/d/1yxaLsYjU3PvUOnIDVa2tLYrTG6Ikb9kB/preview	"	,
"2025-10-25":	"	https://drive.google.com/file/d/1e2wGinjAmHMO-uCNu4u2FVWHFKR4hJuv/preview	"	,
"2025-10-26":	"	https://drive.google.com/file/d/1q73I44RELnG-0VEUPwhmYpKJjd4bspS5/preview	"	,
"2025-10-27":	"	https://drive.google.com/file/d/1xMpG1WOTHpjQycI_SwRt_uv1LziogrCf/preview	"	,
"2025-10-28":	"	https://drive.google.com/file/d/1bUujpVmE3bZhtoqFNYm9GM6XsbFDVu4H/preview	"	,
"2025-10-29":	"	https://drive.google.com/file/d/1oRpoDZnGWD57UoyLVsQjaGoWR2SEarsW/preview	"	,
"2025-10-30":	"	https://drive.google.com/file/d/1HBmrswJogVPEjpr0ijSlbxdIzGXMQStI/preview	"	,
"2025-10-31":	"	https://drive.google.com/file/d/1nqOFdWWocBE5HoZzHNBvWi6ZgUDA85x8/preview	"	,
"2025-11-01":	"	https://drive.google.com/file/d/1dc4P6RmaJC2nlsnC14i4PhcCqWUykwA_/preview	"	,
"2025-11-02":	"	https://drive.google.com/file/d/1pHEhLLJ2mYjOmPre5o2ymRX7RM4ns-dP/preview	"	,
"2025-11-03":	"	https://drive.google.com/file/d/1XzaXb0m0xmbYLIAGDaYwna-236qTMi5G/preview	"	,
"2025-11-04":	"	https://drive.google.com/file/d/1Xd91Kkb7iD6jM-eQ8JqxD9Hrixu1GulS/preview	"	,
"2025-11-05":	"	https://drive.google.com/file/d/1O8ma5AZZYvDFUe-QufP3eeZE4bNDUBgK/preview	"	,
"2025-11-06":	"	https://drive.google.com/file/d/1eEI-mFbG2kdzvdCdnFVzp3Gaa0p6s-FV/preview	"	,
"2025-11-07":	"	https://drive.google.com/file/d/1u7FcH0OQ66Dn4jDlo32dBKpX6uCq0m_M/preview	"	,
"2025-11-08":	"	https://drive.google.com/file/d/1kGCT4kV4I75V311Z5AeZ9etRd8UL9mYG/preview	"	,
"2025-11-09":	"	https://drive.google.com/file/d/1_Jsc7SqWHwn8JVvobYro70NULuQl2fz6/preview	"	,
"2025-11-10":	"	https://drive.google.com/file/d/1nUUPJBixxCHmTzPn-cDzuHKhvxp6cnD3/preview	"	,
"2025-11-11":	"	https://drive.google.com/file/d/1eWFx4MmINZjSVpLCAhfwXkO1bp1axAAQ/preview	"	,
"2025-11-12":	"	https://drive.google.com/file/d/1X4sL4U5-s2SmeW18D91wikbCDdXruKbc/preview	"	,
"2025-11-13":	"	https://drive.google.com/file/d/1nQRyWVT4DH-Jgo2lKXvOfqzBKW4zuns2/preview	"	,
"2025-11-14":	"	https://drive.google.com/file/d/1149yWYwZV_nru9etXF-V-SS24Pir_AT8/preview	"	,
"2025-11-15":	"	https://drive.google.com/file/d/1NbVcBUe80lwv95iosGuVAdn1EDRzaYg5/preview	"	,
"2025-11-16":	"	https://drive.google.com/file/d/1EXhlTDSGsl6pEQDCvj0AVOYOZArMaWwj/preview	"	,
"2025-11-17":	"	https://drive.google.com/file/d/1t3mFzGzO7RPtqdnJFTHeKqOFbNaJuEDD/preview	"	,
"2025-11-18":	"	https://drive.google.com/file/d/15gIp8qVYbXxo7g5g8cJQY0zzetPs2u2O/preview	"	,
"2025-11-19":	"	https://drive.google.com/file/d/1f33gHEO2EOIZsUyyyU-s04QgfXx5BXCx/preview	"	,
"2025-11-20":	"	https://drive.google.com/file/d/1INxEHTUCxAlI1pmTZ4TplpkZ3zAfDftj/preview	"	,
"2025-11-21":	"	https://drive.google.com/file/d/1yPGm9fA7JtSy6VLb4senrt9iCGd3itEQ/preview	"	,
"2025-11-22":	"	https://drive.google.com/file/d/11vHOhhAZgp5LjioND58HSktLlKflWlBD/preview	"	,
"2025-11-23":	"	https://drive.google.com/file/d/1xm0YDrz7yHkUP_i2lFTF3eAmPWkQe1Tx/preview	"	,
"2025-11-24":	"	https://drive.google.com/file/d/1kl7tir_wlsqKOp4R1412TEmVLZm9j74Y/preview	"	,
"2025-11-25":	"	https://drive.google.com/file/d/13Of2onSkF_N3MwvaWbfzyL4T2zCNEZgj/preview	"	,
"2025-11-26":	"	https://drive.google.com/file/d/1VtD2dQhVCoHGqb_rMscElXSEYlrB6rKa/preview	"	,
"2025-11-27":	"	https://drive.google.com/file/d/1w9Dc64tTDnv7mxXhtdurc4VHeQdiU3gZ/preview	"	,
"2025-11-28":	"	https://drive.google.com/file/d/1lQYU-Zn3ErypVzY_mf-orXNEJPbs1QNr/preview "	,
"2025-11-29":	"	https://drive.google.com/file/d/1JD7T0PJHfasUGeFfNoJCUfe2IlTVIycH/preview "	,    
    // Add your own dates and URLs here...
  };

  // ------------------------------------------------------------
  //  HELPER: Convert Drive URL to preview URL (iframe-friendly)
  // ------------------------------------------------------------
  function convertDriveLinkToPreview(link) {
    if (!link) return null;
    const match = link.match(/\/d\/(.*?)\//);
    if (!match) return null;
    const fileID = match[1];
    return `https://drive.google.com/file/d/${fileID}/preview`; // This is the format needed for iframe
  }

  // ------------------------------------------------------------
  //  MAIN VARIABLES
  // ------------------------------------------------------------
  const calendar = document.getElementById("calendar");
  const startDate = new Date("2024-12-08");
  const endDate = new Date("2025-12-06");

  const modal = document.getElementById("videoModal");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const clickSound = document.getElementById("clickSound");
  const errorSound = document.getElementById("errorSound");

  const watchedDaysKey = "watchedDays";
  let watchedDays = JSON.parse(localStorage.getItem(watchedDaysKey)) || [];

  const dayCountDisplay = document.getElementById("dayCount");
  const inverseCountDisplay = document.getElementById("inverseCount");

  dayCountDisplay.textContent = watchedDays.length;
  inverseCountDisplay.textContent = 364 - watchedDays.length;

  // ------------------------------------------------------------
  //  BUILD CALENDAR
  // ------------------------------------------------------------
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const box = document.createElement("div");
    box.className = "day-box";

    const dateString = currentDate.toISOString().split("T")[0];

    const daysRemaining = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));
    const imagePath = `images/${dateString}.png`;

    box.style.backgroundImage = `url('${imagePath}')`;
    box.style.backgroundSize = "contain";
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";

    box.innerHTML = `<div class="days-remaining">${daysRemaining}</div>`;

    if (watchedDays.includes(dateString)) {
      box.classList.add("watched");
    }

    // ----------------------
    //  CLICK → OPEN MODAL
    // ----------------------
    box.onclick = () => {
      console.log(`Clicked on date: ${dateString}`); // Debugging: log the clicked date
      const driveLink = videoLinks[dateString];
      const previewLink = convertDriveLinkToPreview(driveLink);

      // Remove any previous error messages
      const oldMessage = document.getElementById("errorMessage");
      if (oldMessage) oldMessage.remove();

      // Hide video element if it's visible
      const videoElement = document.getElementById("dateVideo");
      if (videoElement) {
        videoElement.style.display = "none";
      }

      // No video linked for this date
      if (!previewLink) {
        console.log("No video linked for this date"); // Debugging: log if no video is linked
        const errorMsg = document.createElement("div");
        errorMsg.id = "errorMessage";
        errorMsg.style.color = "white";
        errorMsg.style.fontSize = "1.5em";
        errorMsg.style.textAlign = "center";
        errorMsg.innerText = `No video linked for this date`;
        modal.appendChild(errorMsg);
        errorSound.play().catch(() => {});
        modal.style.display = "flex";
        return;
      }

      // Create or reuse iframe for the video
      let iframe = document.getElementById("videoIframe");
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "videoIframe";
        iframe.style.width = "90%";
        iframe.style.height = "90%";
        iframe.style.border = "none";
        iframe.allow = "autoplay";
        modal.appendChild(iframe);
      }

      // Set iframe source to the video URL
      iframe.src = previewLink;
      iframe.style.display = "block"; // Show the iframe

      // Show modal and hide loader immediately
      modal.style.display = "flex";
      loadingOverlay.style.display = "none";

      // Play the click sound
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});

      // Mark the day as watched
      if (!watchedDays.includes(dateString)) {
        watchedDays.push(dateString);
        localStorage.setItem(watchedDaysKey, JSON.stringify(watchedDays));

        dayCountDisplay.textContent = watchedDays.length;
        inverseCountDisplay.textContent = 364 - watchedDays.length;
        box.classList.add("watched");
      }
    };

    calendar.appendChild(box);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // ------------------------------------------------------------
  //  CLOSE MODAL
  // ------------------------------------------------------------
  const closeBtn = modal.querySelector(".close");
  closeBtn.onclick = closeModal;

  window.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  function closeModal() {
    // Hide modal
    modal.style.display = "none";
    loadingOverlay.style.display = "none";

    // Stop the video from playing
    const iframe = document.getElementById("videoIframe");
    if (iframe) {
      // Reset the iframe source to stop the video
      iframe.src = "";
      iframe.style.display = "none"; // Hide the iframe
    }

    const secretIframe = document.getElementById("secretIframe");
    if (secretIframe) {
      // Reset the iframe source to stop the secret video
      secretIframe.src = "";
      secretIframe.style.display = "none"; // Hide the iframe
    }

    // Optionally, stop any background audio (if needed)
    const videoElement = document.getElementById("dateVideo");
    if (videoElement) {
      videoElement.pause();
      videoElement.src = "";  // Clear the source
    }

    const oldMessage = document.getElementById("errorMessage");
    if (oldMessage) oldMessage.remove();
  }

  // ------------------------------------------------------------
  //  SECRET VIDEO
  // ------------------------------------------------------------
  const secretModal = document.getElementById("secretModal");
  const secretButton = document.getElementById("secretButton");
  const secretPlayedKey = "secretPlayed";

  secretButton.onclick = () => {
    secretButton.style.display = "none";

    const secretDriveLink = "YOUR_SECRET_DRIVE_LINK_HERE";
    const secretPreviewLink = convertDriveLinkToPreview(secretDriveLink);

    // Hide old video
    const secretVideo = document.getElementById("secretVideo");
    secretVideo.style.display = "none";

    let iframe = document.getElementById("secretIframe");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "secretIframe";
      iframe.style.width = "90%";
      iframe.style.height = "90%";
      iframe.style.border = "none";
      iframe.allow = "autoplay";
      secretModal.appendChild(iframe);
    }

    iframe.src = secretPreviewLink;
    iframe.style.display = "block";
    secretModal.style.display = "flex";
  };

  secretModal.querySelector(".close").onclick = () => {
    secretModal.style.display = "none";

    // Hide iframe
    const iframe = document.getElementById("secretIframe");
    if (iframe) iframe.style.display = "none";

    const secretVideo = document.getElementById("secretVideo");
    secretVideo.pause();
    secretVideo.src = "";
  };

  // ------------------------------------------------------------
  //  CURSOR ANIMATION
  // ------------------------------------------------------------
  const cursorImages = [
    'images/custom-cursor-1.png','images/custom-cursor-2.png','images/custom-cursor-3.png',
    'images/custom-cursor-4.png','images/custom-cursor-5.png','images/custom-cursor-6.png',
    'images/custom-cursor-7.png','images/custom-cursor-8.png','images/custom-cursor-9.png',
    'images/custom-cursor-10.png','images/custom-cursor-11.png','images/custom-cursor-12.png',
    'images/custom-cursor-13.png','images/custom-cursor-14.png','images/custom-cursor-15.png',
    'images/custom-cursor-16.png','images/custom-cursor-17.png','images/custom-cursor-18.png',
    'images/custom-cursor-19.png','images/custom-cursor-20.png'
  ];

  let currentCursorIndex = 0;
  function cycleCursor() {
    document.body.style.cursor = `url('${cursorImages[currentCursorIndex]}') 16 16, auto`;
    currentCursorIndex = (currentCursorIndex + 1) % cursorImages.length;
  }
  setInterval(cycleCursor, 100);
});






