<template>
  <q-page class="">
    <!--あいさつ-->
    <div class="row q-gutter-md q-pt-md">
      <div>
        <img
          src="https://lh3.googleusercontent.com/fife/AK0iWDwcxEY8dZH104QC7e-I05rx0H40GGzDH_NqQ1ORMuws8mgL4kVU8Wv-0wD6RIDnkfCmnmfj4CHA8A8Xtc1XtClEa-rpZsm5UrCdiqN1hkIKX3LNeyVjwuCBWZY8ZkLjaTBPqTbj9xVNxn4hhzvKUN9MgblpoUqE_Ecw6zW8roPoWRzaNwtwckEl2Pr7-fjzu08X3Lkwv762tCbhIwX_4dnUqMQYFbmMDYVPF91K-ri2cW19DBJc-sPWQYl9DVZVMTFdGME2GHIFVF40wORWYHx62Rp06OhHsKjPaDjAI9bDdUp3YjV9lTJF6itxYznGLzs5EmyhEa2F3xLF1p-b1vR9HLPp0tHJcrd_UsKTUTsI84iFivjGSvHp7ncLgefDSlgyFYuMyzy_N00PkCnY1fwgqMj75-TwK03uTcIQfjsA1MGmPEkKSux1s9FnJbJMKWdoGN7BVIppJq50tNdU5TYnvkO4yD15pVb5AICcWLLbKW2I85WVxRvoj-9inqi-yeekcXRaZjtKLrb5StfAZOOGYGcn-x1SEUkqik7f03JNVKRjdidIKDwFa-tWar_6pA_cUyOgMqCMjXY6shjhJUR5MI9hB1LOB2MV_NTKJld3w2cgSFOddyuXO0DsyJ6VqJDNBbTurBdSiw_cexrKn7hQeXm9kTSH9CIaLss6BvnLGKJCuUYBDMYOGwlzVdTjVvEfE3TVts1asS3w7I7Jzt3G0KrN1VjyajpwtHNmStL97Aoi7YZCBirT2G0lED9_VBFMP5PG-2lwLMbtImqPMh-Bkj8mvgkYMc-mcqEEJrYAbAgKFa9de3j5QuvX6tdtU9ivVhGbBbDQyzJ9hG-ElPF4yaRuzul11Lf2Q-2I_PXzblR7IycB6PD9M6LLURUcsCOownQDLbR9liVTzXOvO7VCyijJknUQcuojXp9c2OgyknZWrWH409w8E4zdJbdkC7MC_VlLQtU4dAZNTcClWd5UstlEAXWEBCHy-MU0Z_OWXrupq_iVhsiiav6dZlKhbeSqlMmnRsXEWlBrF58Ajfnn-z2odjTiLkOyFj-rEpxuxlxTrpVZmQQdCLQBR4TznVKje0kSrTvir7wdYWNkag0a4BRcyRnte2rAyIZaFT2iFX3KUlkIFHQnVdmFsIWKXpfCX9UqTjpalYynOuuu2ANjFA-_VDXghooZKkTzKoMDn1tcmcCT-sfNXnfAJry2UvOLby2lRHqpTraSdEMQqXIkPW7N1UvtGPG9MjpBmJaomdKfoLOs3fMrmiBq2xZ0g-d5K5vE3MnyR9wP8XR7henhWJ78GaeP3QiqSnSBQzhIlEFdzXIJNsY1OS33349dijSJAZOmkJtvpNMJpXv3U3GYrxnFKxUdVtq7aBeuHSELbmJ588tuIzZpRwaVT-UyGLVqoRlzgggpQUMzh5hbj9QZJK53e9N1G3SuPqY06OibjEgIyru_0_sDqKqMfZLfAOZIgDlyDmiVVNhg11YVldysXk_QzoAnZcQZS8VNKS1IXRxjSJPWwjPe7w=w1754-h1338"
          height="130"
          id="oba-profile"
        />
        <div class="profile-name" @click="router.replace('/imagelist')">
          韓国のおばあちゃん
        </div>
      </div>
      <balloon-left :text="obamessage" style="height: 120px" />
    </div>

    <!--ページリンク一覧-->
    <div class="q-pt-md">
      <div class="text-h4">おばあちゃんちの部屋</div>
      <!--Main-->
      <div class="row q-gutter-md">
        <!--名言集-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDx2gpG9VJTstolkPNYBwk4iAjBGczH37D9SXS1C4mvulFRWE18VcSvagCtsisD8u2cWA4I5Osgtoj1ffh_oAmyOuK4es-l1rSFwQ2Yf2KQtL3HySYURZwbiSYcAqCj1gkcATMUedQixk0brydRtM2ztzcTofUpXD4rxPmUB2i8IiFWl6o2iYC4VRVJmJbTmWFyR2C4fj2qTyoHh7hv-5INiL4la1avZN4kKOe79YQAub0imGBw64EXI_lf2mGS3aSo7d8Q1sAZBUOTPPKwie9cnp1iNT-ST5gJ4TgUTRErSDmBYVbwlsdWP-52anF6Z0lLeLq5oqZdrcdXUbFORS835OEnYAawAVd-0mht7v6xbf73kksyPXO0Qn9R5slJdEnwPOy6PsKNfx1ZEmzcpfztjnHTbF4fhkg2ArFqf4r9Izh_Zi49h7IWiOYHthTVIVRXaukh4Gg0ejzKXw0WnHTdwXNAc0ktgGEe6Gq6NL7iFN9oCfbI-54epjx2IFrPITkPOnjJp7shWR4r1oipkNYUR71QrJKxQsULg702BcJFC3LGTaAJ_4LerbsFmBKN84mgyU7LaUT-4kSqhYdfKso6iTo62TNj0rd18hNhoCu0tNpYlnq_nzVIJo8ryKul4ZN1hvepomVWpoNNJRemJi0DDKovmyS_DgRmbkbLhezdC0Ckw_2cb5CG1yTqh_yHZLaq0OHnrrQ2ZJZI3w-IJrSW-Zg8Rk6rM5T-jfHaLIsE76E5TyfxcqWaAFkcYCQIsui4-9VDSVq5MI6C7VUDlUtmzY-hhLizG-Vb-lBDYE9biEpltVS3NsZGHslK4oU58XbP96XUfq5T6PRKBgh9YaQD-9lT17LK3wUe8GBxdodLSmIzS4zNpOzqjKQS96w9OtxfMBIYvlP7DSLwkapFBRyduS7GXOFc64er3yLP0N6m_hlckkUN-3xWyG7TcMnzFXkBAtT40zP8eefgaJAXNiQhJi8Durf3I5iRvbC04nQiLOpZ0EKmj4AJQzvna_DD43XtQwx0ek2ahj2AsHzdp1aGHT0e23rfla2PBjiaqxiXX21eNQfhTWGDeUsE7METwLITllX5xKAOZOe59pR1hiAvzbTa5bcCMVXfysmvMvRDqZUG6WFjphKnsopcrAls7C5AvxZQ9yBBgqNLjC-CrZ6DgotzYOZsteVCp5FG_e1zskOgmMCVqRo6lIUBvN8NF1NTOuO0WRFtk48Miniiog2-OKSsobemqqCH0lmybXCemwqnMreQTXIIDcQufsnIfXS55gtBnh4IQhlPXUoNwoI1fkyKk7AbMrzx1rRQQLa3d-i4YMcxyFwe67gzrXcEFnD_5ptnh1pmWOIRNvtG484pMxV8G2NUapVGMZ5kQFnHQF3O5vhuEZtDMWWrBNk1z0jLxFo_7IAD95lURUN1JBp5aw1EcK5wt1LqiAPsYyy1fgHPCFCuimInZcm5FY0UbTKs3fTqrPkYdcnLEhbMfk0kUvqwKPKM9uh4Ul2uhw9bAZtLCj_Ov2alzWg=w1341-h934"
            style="cursor: pointer"
            @click="router.replace('/wordList')"
          />

          <q-card-section>
            <div class="text-h6">名言集</div>
            <q-card-section class="q-pt-none">
              占い師の言葉を信じて釣りに没頭している
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--あだ名一覧-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDzs38pbYdn1OeSiqgPptR2N5tQatvDtfG5k9DjmuHuOlYFDAbmzS6sigNqUqkSrLto8XT8V3-o7LtvuRzmWPgwzHJfpCkeXpzUUZ-J0J9cO4vN-55QDsmI-VRCWuBldn_TY_MMzSF7cNStBJEkkmH8xGephmyqQMRZkvRencOX_nIOcTOjgzo6BRBjY5IFGRiF1J4eVZsCPhcPuDkcHQZ6diHnl6sg_i3Wp7YW-olcxX9vg9u6QZa0tcfasGiU5rGHId1KbQzSjMWgAC39gFL3xgHD8oWCwhEh3T0fjWF8SgrjSWWXeuo_5eGUkhlfTMYxl08k_fL59Kt47YCvK45nU73Vcs0x1gj1T3dyJPGZvk97f5azri1ecr6tbv7xadkYOua2opfY36d4HbLSpgpFK8RjWrWFeRO_bw7iCE_5H1zJq_XlHaS3zOY9f2ep-ClKp94FJwMeXpJE_iCb7GXaAQxpbpQEinJJ-_PbjXHqwk1_zkjydTEjuzInIaIobgBuHJy4kaoMwuEsCtpKqwLo4_FOyMSdThFm21rhGEoFjEpOlIpSVsJbcOEmIfOWwihhE4JJW8VWzIntIJUDFsyImzGWfir-vJ3avKDLE79d3-pFBSFTG5DZs7VDMcyF2q89R2qaePf74dy_B3n33B_P2Bhlcw48Stblf8hNjTK6JUPSNQYrYWsejMOwSA-72F50DMXSTGZYHmeOXFXMttiJKWrRmrB00W7HU0bFG_A8_7JaY-r9RVYYWdlXMa-JAJNhoDTemQDpDWjA4ld0N9-MElH_3j8ZPzM5cvUOe7xApO2NDZQQ4UJcAKm4MFSXdFzs4ofknTZ6ZevltzQZgIAalyi_duAVJWA-7qADIAC3jB0n2-ZylmUJf5KNyuxjgYTIG3aIoSe7aLYCU9nsVQHKQvwzmFhLmLNB4OXeugR7tqTcT7Ua8g_V51QSQ2JHLjxGg9VOj1s34buChhXAUnpVXeukxthiT5wczWPZMEH5Z-K0ypY05IdKhdc3T4kV7qS6iuEE0PSKSRg0AdT04NtTQ6TWzJydD7JddcMu6uTkXfasrzFj2-OftU_BzX81CM7IhFV3Oeb1nd4pv_GbH89oCqcsoABjccrVYvhi-fGPP-trUQcZykBxyGgfCG4LJXh1gwz07xEWdks5hVGrFcQYyOx-euEUU9d8l8buAsAkGgmsapNDxW-_2hggHOhUBdYQP7huFq_tZ7zNgTQElKW_mwR5nFn0H4fStyOW5ylGARots0nWRBsr6Ar0WSchDWwt5RlQ_QxPSUciWjB7aqxYMO4lWpHWkUapyPinH4lSXZ2aSZfetfuFLhFjH-UgsC1CRHOClF12-Wbu63VWF4ofDvM1w1zItPID8HPTKtXwRYUgPrMm1_eVHGbkHFXdgWWjv8JIUIGtmJBZGJpo5_UFwJA2cK9PPaBv_ApnCbjpjieriwVhSwVSeVJp2XsWq9o8s0Tu_GebZGfzVxo0dCBeJqOXwR-4-Zw3vySI7yZkROdibE3H3V6INZw=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/nameList')"
          />

          <q-card-section>
            <div class="text-h6">あだ名一覧</div>
            <q-card-section class="q-pt-none">
              数年に一度ゴットタモリが空から舞い降りる。これを見た人は今年の金運アップ間違いなし。ただし上強メテオの撃墜される確率もアップする。
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--焼き直し条約-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDzs794R30o7h3wxoDV9RMnLEX5-6kNKXZzvVdupJv1KPVask09ymZK_ojKLkTa-o9UO7LQ5EYsJNSiyicomKD7u2Q9vpY_8H9W5GnsEFM0-_h0hYmitUg0sEKZAKve6zqwanYzhxjEmwZ0_p5_xaWpiykYIrAS8ldN4A8Ugn9rE5k80wIyI2NxOsgAOxPDunogx9Cu_fRUmt2ycYsOTXP5uQ-VMTnTK3T0F49EQ2ZQ-Ic5WUN-W8bYd05iQGpNuJCyU3qZJjymtZf682s5KB5_1lr_btgA-T0hQVb3ldqSQcGHp_7cv2ToXKaOqnh0sOKvteEx3s1XqN8CzPZ3lvkce4qF0WMOUATaXWS0m4tQ0NS7kp-fz36uvIpR9ra2Twg6x3yRGMSz-H5zps8-9f063urQcP3aTxwIiwFv9CUif9wHvRUX7M6TUucu-Y7LmCH2iUZd_lYGMhECeMR4HrMEwORsvgsL8xFNCUpmgi8ePF-uO0U0HE2N3C_vWSeE511oKX1g2TyIKCNDGwcSC5um4-m8jjL5vO_7QLzm8yVT7EUZCVaAI5J1948O3yMo0ucptaIbBoWAWHzacEQs_jbdsetcxUdY9ze8gIQBb8Rkf6wo2mVa4jpSudUwRcuYpFBIgHLwfgubUUh-KHyLvn_7BkUTLP56xLc5Dc2y6ehdnyJocnIS67Xywj3SwfUCAO_GP7kNAApukAAQ97Wo8bn-VuqNBGd0jiDUTBTk2ZX72ufp-Uwju9X8Cef4IdQy8qShzAMcPMCRX-ZDdloZ1fzPeYkKfrcjDHiMhRhRfrWlz6O5useQGrTO70LCKzOpouttZ85qEMifSn4DqdOC6jkMfDVCkqEKuJx-iZpTamJcrNxNfL305FzCwbXt-FdfWg59HA0moo7gmjRcyypKLpx7SEyjDFGDqd33QxLUrbQ0wD35jkCOP-3JvrhmC6n9wM87WR--JSirqXD-fQjALoOTpNeITqUjlsqspcwtd4yw_3_IBGDdlxb4rLjjZd7xYI0qP7pSZxZOyeNhzL6u7ujj4Jw6pPiRwRGHYGtzWvgvtkCd7UE_lFBVxwIEMRH4-lQRORlMwZRL3e6T21BUQkE1yWCGyNCNGO8wsT50JD6RyRfOGybGfX62kLz32Tjr9EQCKfIYqyU8u-aSeQ4vJG33UlXEN2E_bKbxhdBIeyuAdK_5VZ4ss2FCqBHV7NblFmAPuEoVcR6UFeRAQDzI95weLpoS6o3lMVbj--GjBHzJRDmT379JiD3eT584cacGQETx0dJxG3iS47tI0AqoRoQw5_ImP4hXOCWbsb6-D7aApagnS2pnAJbXiF19eblidnDTKOJQucY7PGiSpdw3xtzlwW7YpwO6ZKtCTR5C7lEBsxm0XptSeo4LC1MjxJFjvBKSnuerH4P2muIrutJQ0T4anucSi7EEJNN-aULcrqPxi8PEP9xtlhHR-PConYIKbYJdoiABFPk5z3ZSeOEBYaK7pW1xK2sfWZ2iIaMFYFfLRnS6Jp0isPAWNqw=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/yaki')"
          />

          <q-card-section>
            <div class="text-h6">焼き直し条約</div>
            <q-card-section class="q-pt-none">
              自宅で映画鑑賞中の土井カービィ。最近コナンの映画にハマっており、スケボーに乗ろうと思ったが、走ったほうが早いことに気づいてからは、ぱくーくと一緒に毎朝ランニングをしている。たまに通報されるが大体ぱくーくは逃げきれて、土井カービィが捕まる。
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--俳句-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDyNM5XMW3A-QtTa2YrnCdZ2baukj53298laEF52mYUQZ-U5PMi8yLyR19lnE3DN3t4szepcxHYh5xQNXMQiGuN6QVLUGfYQcrZkEEUVMXEek9u_Au2_0jWN_CXIv7RZK3vTILuKJQgdRD_D-Zq3_ufonLcxqdRqWG4i6YXKQQdFL4qOsqeJ_2HlaJ43X_eKOP7CiojRAfC056CeNZ4dsmzQEHhsjerMiq2vpvhnUj_2ek8aREUXVTUMEFDLk6J7-cuQUY30iaLg_J_pk4ZPIuEZn8DHsCBQd0aP5hUyDYnmA-dAt71fukNF0scVwR41d9zLDIt7Zwmo8TtA5HDmW6y_Pw9bnw5eECTlHSEo1xx4FMs075LR3r4hK37xkm4Yn6LoLmq1ZiA5GCorV05HiVk_6thuaWgJblynwVLNt2Y3IdR0zWgxlvgrs0nBzZHJ1kqEpAyb1Plh8Dt9TaNTmFa1KJ3RfJVzyGiwTuGccKrTzo80psQEkoWfEc5bebJ69hB3cgH680Ij2ShB14owpG3gIS9EX6sPiMu-uHaUXqwkrg00o5R-QjYwHWfYEUyojlFiyUCLl9r9NjglB2ivFfuqA6QBn5R0Mmm_exs_fmSfL0aqsFuSQ4z5u5H89trMdmGliA5h9pRleaRISgSzwgp7QwtiWwmmtVODX-17pj8eqWCew3h_6DFxmRspgnh-GyF_CfQQEejnostYmVXdryfDCkISGjWLU9du0T76p8mhsAhZDgDQGw7Qh1Mnr0D1oPsn-Rzqc7dkjo7YXYrFaDyFrCZ1uu-j9olEB6HdOoA-sLrN1TEFf47gfl0cy-0QXWYHOh0I5U9EI8-g3eht-lPG3kuEfZa6NRBGh7r8VJtEfaS9Cv8FHiH_8e3l_5W1Owg6xFwKB1vNy9HWmUQSZG9wPmjCw1yv9fmVdKCsTohQSlr_cy_7nhLpIzKbbQx-u6-iBQOP2rovq_qREEai9ucQ73ef1DFiJHIcdyPaRGPaej85rK7mlxSQ1moWAF154U0YM0hba7U36Te5fpVTZ89DAabRvLNR2U0t_NQMNlNUlbdVemn6omddP-KT6bXXaHBtnxaGsk0sk_6heRO4761PsmgZ4ssRj3Ke6S_kXddZq6GDTxczmYe7d24ccLoADnuKa87rwbx0ZE7qXrKlK6GEkyX9aXIShSWyqty4--0nvdUzeK4ZlErYdPPfe2--2GNPobMrB3HzBcMssDhazC82NfLECTs9S1grQMvwxrXtow1iRLvjbNX7CHtptW0EWOG26riy_OhRoB_bP3BCC6A04fOkMwgEfqUKSiR3xWSO52M_A175R1jhdHJ4uixtNuL5d7vmdGvFgklMxhfEl-RT5MtxIPXCUzLrTzlM5Vc-AjEPu3mFMqdpxYgf1WS4Cz-QXLJGoEHMS6_Ohovdgq4lzYxTOASFYTYOUKouDvlupdO1WwVSIXWHOKY0tyQFqVimu56KlZLx4wtno3qTMx8lGGoo6DCL-rFMFx-fO8hsnMVeNJI_vbcY2w=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/haiku')"
          />

          <q-card-section>
            <div class="text-h6">俳句王決定戦</div>
            <q-card-section class="q-pt-none">
              これはもう言わなくてもわかるね？すき家にGOだ
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--学校-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDx-d3JTCPihTuKNFnu5Yny5VZG0hH-mXH_lhozfgQeZKciJcd93rdunODCi299sxzkzLHzxZqoYwmI3WhSjEvd46uxg8E864WYRrMAFo8QusRjsuisyCwzQW0dbCsWkgfVUjH9dv7JUIo-oH50w75RaDNyjxolMxKtXDs-M5hkF4Ngr_BQD7mkhH5_I8ZuTEOIpg0Z5sCcz9IkrTgcKPDBo7iictI2FwP-tvxwQ97vtdfi00w_-WLI-_6TIPYvr_7nym33L7KecUZIifswLxCYIzjmzodQzobhzGZIg2Rvr61c3CN431Z4SodfrLZN7XGgMApift1L0fzhBKvqyBXiq4VgX6IkadkUhpZk-O-od9CKfaCgbLKcW0OLlTUuHdYfPJxQePvJO1wx8uxu4kCcroO10RSb1c6_PW0RCJACBG_XjrCeI0gYtLOKJ9FaOEioexNyZUh3-HzZt2ijUuJ_aq2e8Lp-gdu87Rqp965JWaqpeC-RA3fMco9tYSf4oxN0-2fEgDQGBYYHrRxoOdBmXciB_Y6OPRytB4wXZN5Jv3hW3Hz7SzJKZRfbWXRkkndMzW6nreCai2LNs50UVsJr3qVCbY4AkqacYd4YmL6g4oUqNnbw3BzWnI7UE7wqBTj48zqBMabtbwm1Bal1L9kmC3vot9whD-NxYO95eetScZABEGZR6aw-xVS3zozR045HKsYfe_8C4x74f_9znqnTRAPkgCHbe4rVbRWgn2RK1fzY7Ii3_UmWZE5j2hNkRLOo8fw5W3uicqxcUvAr5qPKf7uw1kdnT0XpGtyopFDwFVTPsTFhAzq67NM3KavLBJLg1zIzkPNeAlI3E2Y6bAyFNWJrEzdNEXTP1xNwATu4Us2MO5MlAWcV_3BRbzhCgqtQCEKvBmfnGprEYJ7rQGOP-kj-grJCjwEA-_M839bvVMKXXUTpfRLZerP6BttGL4L7eXAHJYblNrXGi2p-gEpLBdOqv3K2eE-JthwQxVw4dbO3gV5UdwZ3IyVZIgjvjKsCihLfjyikCQZoxshaqVb0nXvrIXixjLKyOoz3_EAV14r8AmVR3oqC1Lj3dn96YcFLeXjPdKIRP87ke6xCUqqMWSlmWs8b6bALbO5W5SNUyE0qqp2OuPzCE_UXThyRLP__sOjMkV4qLH4eo-MedeiXGW2L_pPlWJ5Jlxid_UU9lOKj1TXzOtv7wDBULIN-sNue17MP4k7f3QMw3CJDjwKu5H6sQUDq6ULP2SyIu3-uyt6Y_anPTGpFVwzrHKlyVAloY23AD3omHGN3XhW_Imc8qDD4aPPrRJwvfTVh_JWxC0CrOxjMAFKBGSbBBNp7CcgnxASi7Xn8fiW6EDvsTGXWzWvXnGfWJoZ5eqHM9OhqEYZpuugeu6gFae4-ZTtf2x2C53MCQypi39Bms4PYtvDWR155OassljQEbEsN1cO5FViA3Ha_U-lHasZabcKBXQE9BmFtQeVV_LywQXmIcHF-9OfHGZvfbtJxxe8wxgPyExHZ3KIMeMFWF4g=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/school')"
          />

          <q-card-section>
            <div class="text-h6">学校一覧</div>
            <q-card-section class="q-pt-none">
              社会に出てから行けばよかったと後悔する人が後を絶たない
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--共有リンクまとめ-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDwokJGRrfsahwEt8ZTYQfr3sk4cEJXVadjbb1BIdxM0SHbZDgP5FEg9oI69zwt3OgxzA6mJJgsincemJ8WYB3EM4ejkQLtNjIop4ZwnPc7CTCqJm4_u3IHmdKs5fGJxtYNcsT-VU2bnc9E5aHGzmnZ6eZHOTuO5ffAQei74SGtFH4Xw6-Y_5bjbV9MjIs8FQGK0OGS9hs9Mfrj-4gESuCER8JCQTyw_HVtEV0hkCd3BrVE2PKlP9LW5FF32OwtpzqYlFUUvLCeXwcjQWeUC3mI6oIxwp9IPUKslRC4TT4vwJuZIrmh10Y9RMPV9LIV6ZvJDG81vD1CivYQzgJPhl5j2IDRl4wSBA-AJEbSX0MDRu9PrzEje4GYnugn5afy-EWZUlvyty6Al4BYVIq2xwcHBefGt79-eNl_bhgtFpd037-UVNrxzn1-AF5u10euztrxbjZ-tOULQkAKCAVzxYxw6dazgMUI9ENrjOMHaLlYmr3i4l0IJXQFt4YnjpGzB3zrJdaSeTSOOvNM0BBcmt0yxVL73hEkNVJmKSARt4Ymogt-tA3sTIaWod6Jbve9RuEijEF4S0GQh6vxI3Fp_-24NJxw3x6l_blkAfzb7mbHR28RSMCHi5CxVb_9XxCCt8cq5Ba3YsK7cNKxl9RH2EdzpG35vo0U6_c-JenQfbb8djTZZeHBCRNzG_Q0UVORF_38P2ek2kV2XEV0mYXYeKcauA1W_De0wRM5Pbg43Dn0eegegL04vg81kenyvnWi_hXI-dsI8fFB49v83GyDa-gp1CNRoAI50R-oRVUgvdK10VP95PLz65S1hM1mHOMvkJeWGVdDLD-YVCOZPMkQYuvgNjJnbd796lFQIzNP22pRDhiE3UP7KxifUKQDDPDn72tvL2-MJst1ViP7EiSkWin4C_RS1QB7Lv8J2hA0VeWly8amWsk19XTbRrz0-JwCEIxW_ELUXa1aa8-aS7M0yTQ7SOF_yKRU9ahW58j629SGWIlCkMn0IcHEb-bhAjGtXnf0cooY7MkRIduYWxlhW-iesemYYXomknPwoVc-n3W231xqJk8oTIW8yK3rLssIGkB-HjFL4ZDmO4eIKPMeS_PLTH0cfoWakCSetnEJ5C30Re9aE5eZzDsxcHJtpgm_RouTG_3nRzgFd8bUnqxBwo26HHGlsexNsSyaYA17S4yF63ZiV6ZkY6sddbZlkO3Ptx4b3jpDZmfBGPGpCcrk_FWDvMRPBuYt8eDH_DH2axi73JM97FMeLR53RqPx7YqTgqTgfDsHKUnZYQuyqRDaQmpiErGIUiZs_XJZZJz9vHs2j6IjPVkj_Rxvd8bACk3I2QiDcuvn1_r2iDK_TakPoSKfu1aHjQDIqB93CQFiMTTBiyM2m1r5dUas9Zz0QbPkE3--lz9d8YqLogtyHMMDAKlGDElS7K5xAf2h0r_iEW7Db871oztCoCeZolwPdrex4oPJJnCT1acRtGMRGC88jtcqFRR8-ki5N36Sv0T6nIpI4RNV_JYNyMGJZ8g=w1357-h934"
            style="cursor: pointer; height: 300px"
            @click="router.replace('/info')"
          />

          <q-card-section>
            <div class="text-h6">お茶の間</div>
            <q-card-section class="q-pt-none">
              お茶でも飲んで、ゆっくりしていきなさい。<br />
              GoogleDriveとNotionのリンクはここから飛べるわよ。
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <!--おみあげ-->
      <div class="text-h4 q-pt-md">お土産</div>
      <div class="row q-gutter-md">
        <!--カラオケ-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDxKdxFI-DtSpzNQbn0vYoZZE4EKMzYkI6gopl6ZZC5_ewktk_BiAKwdKcMKKzl7iOmo1N6HgV3R0qkuLhR4RLoCJZ3C8IM7sS8zGUDJT_5bMGBgK1lTHtxx2BZ16mWXo0Fagnk68-kU5IuQssaNp5Mkzxv3I6sXHT5dMMxXkO0JWOTSv_LSiFpSWEVfg2Ko2sUZq4NaWg-0dX3T9XCHTU7aONgEIyqAJ-1Cf1-gtuwlBwB6HV1YFYbQ1kqgTx_O2MvqujASMD_UoUoXyagT3yBxJO9t3ECBzuJXjZUp6Dai8w0wRKEaxg0ViZJf4lJSz8Pw4byTVoCnzdzoJ9mtWEdFgxuXqOOi0LVsPSK4Nu9upkivJ4qZF_PfZxFsuYl6AFRWPx-Qo9lobiQ7wX5FAThA66jIiXfve08Hht1ML9zQb9TRImHmHhM67yXRrGwzceWTYfmduAgeiFZJvnWph6QgfYeVTOtGTHhALHkIs7boenBlxv3uRNlESVoOpauv06PeGCj941eyZxu3UOmaUCpKHBQmpfRlwVjquMd5Y9S5QkKFUfN9MAcbCnz8QTzAovAs_3e4ntXK1dzVVrt6f5C1CNCNSSXd42dXbX4c3SGd6r7OoigqPOxzu7KR9H6uFFYfc8IiYk2rmgIejdxvK5RI4y56Z7Zq8nGC-xjLeOO4vLK_zXnMAV-bz6ASi8hOc5-1FCz_6OCCv7nSBa4Laj5TwRlq6HTTqg5kz5T3d6rd4STZT9l8b6X4SctdlUfSGS0rPaRW-mxkfWbzc53GYGtApWI5lI5hqMHVKxlKBCnvLPx4YPto5HoX0EfqembPEA5iDaouDWx3KlNyzokfvTQ993vP3WG5tcVhrLKtRekcDzmFgUJKhPDQPZ9LlnjDuAWmFN08GzK4TENZFX3uK13apACqZ6uq0BLPbyeqYqx6dJtAYzAKnH9iCQVuKKJED3DXlroFrjowB7UX5vQVZxaBQuRnQl_IO0c8tBCL4EqgfGejKuee_t6oSyshGDX4m5CFCDRazGZJNOD1dZ_R479OTEh5vs0WUxUpZMOHr2CYbr74vLEts5ztEm4TF-2vrq1R2Cwhg3NccviH4zHafHwKJUVB2RHBB8UBUYWZfD3Vhm6M7sfp3Xf4IpUnW8nHnmlVrouGhQ7QNNEvhjllMtHIv2l10ouu6bXkyVnO2ZUpaLZHy_0AN_rWn9-jUk-AHvdwr83vIDsQ6bjuQR0Gx_hUstyfMNWWtIxUSmThsnCltGsI87yy71bMn1CH_D8KnRJFJCKYWOKDtpsXMwkVvo_V9bqy8de98SGraqIrQ5_Hj28CH5EyRJvEkR2KddiVao_h0O3y6SaKBl4xNgdfszrpya44ahKQYq2MmguqNp1NMCrB4ljPjlLwjWH_Ee7nYmaJVm1FT4RdEgVcxhRxdcjB4yfFlxLiw-5upNWetrAMiV-UQaYYaY2eqxhhrWkLyDv_YhjRocZ4-VoZgsPtFI9H2YaHHqeL2ndehS7-FuamWd8Gk9cMkWxAFw=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/karaoke')"
          />

          <q-card-section>
            <div class="text-h6">カラオケの思い出</div>
            <q-card-section class="q-pt-none">
              奇跡的に未来に帰る瞬間を目撃した
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--ボイス-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDzFfzlMHsQElSYitoa-nItsMjkw9VCywjuBeXMSxnT2uyv66o4e4GZuppqV1xVFJMGYY15bPNfaW1As7L38SultOGlwa6MsNfnQGwHQ5GogBfI-9kNeqphuP5r9BM29KEsH35Fi5FPV__JvREt4Y2Shi38rfdJzslw8s_VlQ3tD8RPJRelQKHpfOsLzNbtqL3Xj-vK8tCw8Ht560ec2xBLsDNYvhxTPck9bmmgrI14KsR8ZvKNfpxg4MF-yR7bbRGJrkcImLET1NbWBCLju5XspfTqAE4kHupDdLSKc1YvGq2zPwAG178fw4snsTWgQyYHvzXTyrtM84hKZreq70_WyFIiFr_qMSzcB0-EAXd2GovszYu_WzhBrnpUInMZ1K9cZsc6I1b6HRRMnWtxbzR68okM4KmFG67_1AUicdMT1sxueNmr9hfEd0VOFB4ol3vF1uGuzH5cUM_m-34PogmpjQvkH2AFgB0YQEXTOWnEjhgeMPhp7bodCXyL9OJD8_AgfpV1zGilwVnZ7Ol_Tsnx-jS08gUyRQdzPxaQKlACTuPfwk0q4IuvC3iOGcutbOVqEZMLSFKlU-I8swKt6P6oS4S51Y6cxzlsHKRgUw9gFEpCls3qAbYZJYoEKDhcyp2cryOp2G_aff3o7Hmc6tZ9WgJrrcEAduQl3OAOuOUZ-J65ohIEEzXFnKq0bNUVREyZHjpJ-g55a3h3sNLDi0xuMxYnVEqhfIYd3sERS1fiU4HKkdwkseFGV2sJfMa0b82HOQUSD3itsyJOlVzA5W62jXcluwt656kiW7IctbrXJvuczf4LD6MxG5r-lc64B4Iy05mUY7y0cHJYENBAOwhmuDq8b5zfQTX0bKWOrcL-fBZoODLh7ooIEpbqhbCooDzq24bk_REK0es3dk4FU-F3DGU_5GveqjkQaBdNe7Dvw7kqC39rdP0YW4wknW8Az7seSBTqFfYJaLXpDCi3WO44odRaszurWyTqrto3QwDATNe4J0LP5HUxzpd8LicmLR2JyHkieBbzlEa4hVRhOPAXF9-B_muTj16J9TceV8BLsEc9qpo_qwb0_9F2r9mYqQlGZ2O6F3_zIPruqoQJ9zgwIMOdG0ESmpvPtDEhKvQquMqA07DzHZfvD6bitbQzyWlAO71vQAw2B-dqbbM6lM6O2sI7IKRKU7NCAJwMe2UHZQXMKMGf2dJ95LZDxVZ0WHPhNmwTqroIMutxBJ3j3WERP8XKECB72-MANUeGmA8vaLzlhpuHLfrHpiDgtbaMScX1xj4yJnIBr-4F0BuY3MvM5wrKjro3xUXubofkDTax9vgRVweqVAX4DLWw-Hiqb7YAulrbDcdvQRR9FGq1MnRA3tuVJ3WLchvgNpB8rE4GGPzzr2FUAhAzNkENg4SMvDo7kPj690ZBqdbwKwHRttqeT4Ei6tJL2_hooPPWPmTDlRweaP-v9I4Tzdkr6xL2Q7p1pJkgW-qW2mN3EyWOIMCNiq1SXsSLllxoQLZ9iZYkNY-4htFOmbIINPA=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/voice')"
          />

          <q-card-section>
            <div class="text-h6">2040年ボイス</div>
            <q-card-section class="q-pt-none">
              ここの画像募集中。それまではイチローで我慢しなさい。
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--スマブラ-->
        <q-card class="index-page-card">
          <img
            src="https://www.smashbros.com/assets_v2/img/top/hero02.jpg"
            style="cursor: pointer"
            @click="router.replace('/ssbu')"
          />

          <q-card-section>
            <div class="text-h6">スマブラクリップ集</div>
            <q-card-section class="q-pt-none">
              感動するなら今のうちやで！
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--オム子レイディオ-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDyxGshwlTg0JxigXr0mkYBdsFH-EwsPyshpZYAspzg4N0DaNrPL1Ogu0RxnPkTPGBwJM2CqsXJyhtKnN8-fqIr1dmmBqCRVXf3NLHRpfk3sEwG3vWSh0R97QlYg5MVTpWJ2w0fn9sxbCedMt7vLY74B7Qw3dS3MQlBZFrfL6JuSz-mb5IYgXgVQCU2Dq9qgH6VBAc9I1_YbsT7IzfdvqV0WoWvXWQZIPrZxB4RCqTZY75ILBZAVdrY7_qQlPBVy3dMRdpHEf68Y3TZ45QiOf_bebhkt6PZkSOjzH8q6gged1bAFP_9WJn31jYPbi7VzNXp_AMOQpo2CNbt59mMhS6woTt-LaUWwPwHyx1ApeLxyXGX7DTlv3abI8tYw9SU7pJ4hsfxuWAFGfemIhX-CLbvxzcPvyrJCwMt8pIzMK8JTH42gXeE3lYUl8N5spvsEcQs8AfC-JqRiJFd810aYeMn6OlNgn2klQZrZjnQilNaqwlAX33T5GTzwxX6hIH3hnnowp43Pixqigu1nMwWOL1pvE3J66JHloSM8Kh4jFhafGQ3h-eH6mtfimfEPSESDc6lOMOrjuy_ktTsfmQWnUlCtSj2_oXR49mghTLNwtHpJXrrVHuL2htGkpDoRUyATWdaNa318ZY9IInS3mnYd714b-gHvXwdzBQzC3EuH7PZlo_osWvOF-rl27K6v-t56TD-trAfT5HLZddeh_wHES5nEPcKaakZEzHiDRXFrn2sabEawe64gAdVyjQoprcpbT5OoXWw4clci5dNtAzncKExP4yWgbOChG85P205D8P08LsweAhppj2Lbv5XedSn-_FNGMGjgPDJ2x_nMo7uMOlQ7N5LO8hHW0gU7avws99am4PSS0xLRy-fw6GlwrOSxhuWNquXmVtZn8xnr-WKM6F1f9WSl2tn1cCCYOTD8YF47hW0bl3ZknAelR8g2vLf_ensKtgiHxEnz2ICR0WHj_wkpZOC_lHPmLu5KOqHazHu5GfouKRKgfypXxyMUvzSXaapZTGVgGUAaY5ERwvjSKRy4zG3r0XsHcP_7DGZMZ6-CkIMh6spNpcw1kPpxGThUNoTnlpukocj2llg4npWRAK9xAQpj1JgQZXZn2gSdjOmVUG-S23b4IfZiDS_oNQYbnWosDxV_APIU136kwkpufWMQ5Q_DzfEEWrvKVCVCIxbatmUm0SsvHy1aN39WqYuoLluYrrB-Esx5moV7xfPBRu37IzdIk-1dQquDwb1ykPjdHUgKYGj2Ji3FCZQv5QGpulPEpN4sVb1PV40yR4ZlizxrSJqLWbhgjlUJrPc17T1nQSBX0TKLGK4w9tPTUhNji_cAnGzLtEYYse3pxd7yJQn8P-qafgqGQJU3XL_vLMTkD36iskS_TAzuF944Qkuy09YhVScYaZfeIYhAHNZgseyuWMDG8_N3slbTZr_rCul2TXh7hNKEwCE-eaDdnUV6UkX9_CH-4YTBCsgbuvosY3dt8ozuu5GIFAPWaq2iD5PzLOmtNwIejZM39w=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/radio')"
          />

          <q-card-section>
            <div class="text-h6">オム子レイディオ</div>
            <q-card-section class="q-pt-none">
              オム子のラジオ放送局。<br />
              普段は自家用ヘリで出勤しているが、たまに土井カービィに運んでもらっている。
              ちなみに土井カー運送は10kmで200円。まれに復帰ミスして落っこちるのが難点。<br />
              空で移動したいならオム子空港に行こう。復帰力の低い人でも安心よ。
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--画像-->
        <q-card class="index-page-card">
          <img
            src="https://lh3.googleusercontent.com/fife/AK0iWDzQ-Z08ryXxE-mZzLTD01vZl2anbDxCsNCJlKVSfgNavN_yVTp1_AxvRfq88DwKTaViVUs_C-AZwbUFoncbF0bc2PqsdCqsb1VauBfrCGbk9dd0lYaKK5N3APVp18Yu87xGzj1N-5qQKFqoaVA1P_KO8uw1tT9fAhEa9_ct-m5Ex_owUo2n4Lwzu3THw_0Pgzw6_UR_Dk5pE11t6VtJRKPfAvqfycs5BY15CQNfHvKAsIx6JK5inXsmV75iWIWNmWr-wGmbZjsDgEgMsQkBmaTzoXEj9cgMyS1qQmMBDVkUhlyAi_FsU2UaP0CIM_lW904T9EeIbugjHEthGSLf63EZDoLmglww1uOyOiAfDDJyjEPWWOT58PcGDDYHpr4nAjPfPMMUq3hcnuQQE83hb3dNEqmtzvSAhpfQOQdpEkuGxa0TqkQzPUjgRIE1HH5tbkoQ-Y9NwO-MfgcJlSGBnfyyfJnxD4iDHv5tb6qHAXQtgAYlx8kFnlurQFb7UL4H1ILIxJAVKWCiyCIi8a1Ghl2ouRQGSdthRWf_7fIkLRbTzYwUW3izhAph0zPbdPyBH--XqrSrVeb_Tx9nU9hzzSPRbU-A_qXoP0VWafXytMSO9pijk3dN27q6feaAD7xQE2i1cwJQLNV7shjtO8y51m5cGwZGuYVhyjJsHi8O-HMR45Gq70RgUQ8DoU3rhxIFRYyx0_fvzcU6kaNU2vb0Mru762wQtWSRIH6f8tvPXID_cYntBeazb5NMbNpvs1z7V3p5x1UZyr5UWSxwIJQtFc5lI_09FYCRx4fcdoGvkRWpYO2vkAyAQMd9EMkKiZ5YQlf7MM5cmtexxJJM86p8jvbI4kqf6-kTmJ1f2nbZ_BbXDIrzTdiCCok338AQBbbOvKZ3X8pjPCsr_V5UDuroXSTm35HIxOe-EcTDwlEk7qfXAYi15IlE05K6qLkOJxczv9o5cq7guyiQn7cVt8UxsEAT2utV4R19iXU1nvrgFZj5HkPm6FylEZxjiuyu8Uu7wUZ27hAiVb-5-vX6j7lNSw0W0ZuMtTGcKtcDFmu2iAngCzWEvVjfX20MOwHsBZiA2oiiSJnjoETm7t-KdF65BC15myScq-MOCckX58XuX_4vkS43hverE56TLhokYeiqWeHb7Q1LmM9WOkQAuWBE6FLVs1eGYE1HLbtJq_j__qCPgiZ8StTC0j0a-VizHMj-FCljf6r7AyWuUHVkNzQDBxwl1aqZnzY41zdQHEbWQwx3dytjsTCAVpTRv7_aoJv02P0q-ZoszLXi_G3VGJFczgOhmmG-7csIUjXWCqbCSv1uoxL83HIOPFu7qElR6BQaCzVLy-PvGuXN-icWiOl4QiDWHoAVFHHyRTpu9PZY5mX7ifQdD9TcGeHpJuB5GvlhJk3S3Ad_w_uuswVsZOI-lFDHeN3jTdEoSCZ4_Vfx2ImWlsrBg6iTlokGo4t-1ZdA-g61py9naeLtoEWQqAeYJz8jCiuHzuSqOVfjsRasJMhJvaM1A-nYknt66g=w1357-h934"
            style="cursor: pointer"
            @click="router.replace('/img')"
          />

          <q-card-section>
            <div class="text-h6">イチローの国立美術館</div>
            <q-card-section class="q-pt-none">
              なんだこれは、、、なんていい景色なんだ、、、
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>

      <!--Scraper-->
      <div class="text-h4 q-pt-lg">おまけ</div>
      <div class="row q-gutter-md">
        <!--Twitter-->
        <q-card class="index-page-card">
          <img
            src="https://pbs.twimg.com/media/Fu9FR54agAAXCma?format=jpg&name=orig"
            style="cursor: pointer"
            @click="router.replace('/twitter')"
          />

          <q-card-section>
            <div class="text-h6">twitter</div>
            <q-card-section class="q-pt-none">
              twitterの画像をスクレイピングしたよ
            </q-card-section>
          </q-card-section>
        </q-card>
        <!--YouTube-->
        <q-card class="index-page-card">
          <img
            src="https://pbs.twimg.com/media/Ft1B542aMAAzixq?format=jpg&name=orig"
            style="cursor: pointer"
            @click="router.replace('/holosong')"
          />

          <q-card-section>
            <div class="text-h6">cover</div>
            <q-card-section class="q-pt-none">
              YouTubeの歌ってみたをまとめたよ
            </q-card-section>
          </q-card-section>
        </q-card>

        <!--Album-->
        <q-card class="index-page-card">
          <img
            src="../assets/koyori.jpg"
            style="cursor: pointer"
            @click="router.replace('/holoalbum')"
          />

          <q-card-section>
            <div class="text-h6">original</div>
            <q-card-section class="q-pt-none">
              ホロライブのオリ曲(動画)をまとめたよ
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import balloonLeft from 'src/components/balloonLeft.vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'IndexPage',
  components: { balloonLeft },
  setup() {
    const router = useRouter();
    return {
      router,
      obamessage: `よく来たわね
ゆっくりしていきなさい
とりあえずお茶でもどうかしら
`,
    };
  },
});
</script>
<style>
#oba-profile {
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  border: 3px solid #b4b4b4; /* 枠線を付加 */
}
.profile-name {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}
.index-page-card {
  width: 100%;
  max-width: 250px;
}
</style>
