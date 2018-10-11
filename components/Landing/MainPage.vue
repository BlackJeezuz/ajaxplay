<template>
  <main>
    <FloatingHeader />
    <MainSection />
    <ManualSection />
    <AboutSection />
    <AdvantagesSection />
    <BlogSection />
    <FAQSection />
  </main>
</template>

<script>
import MainSection from '@/components/Landing/MainSection'
import ManualSection from '@/components/Landing/ManualSection'
import InformationSection from '@/components/Landing/InformationSection'
import AdvantagesSection from '@/components/Landing/AdvantagesSection'
import BlogSection from '@/components/Landing/BlogSection'
import ApplicationSection from '@/components/Landing/ApplicationSection'
import TeamSection from '@/components/Landing/TeamSection'
import FAQSection from '@/components/Landing/FAQSection'
import AboutSection from '@/components/Landing/AboutSection'
import FloatingHeader from '@/components/Landing/FloatingHeader'

export default {
  name: 'MainPage',
  components: {
    MainSection,
    ManualSection,
    InformationSection,
    AdvantagesSection,
    BlogSection,
    ApplicationSection,
    TeamSection,
    FAQSection,
    AboutSection,
    FloatingHeader
  },
  layout: 'main'
}
</script>

<style lang="scss">
@import "~@/assets/styles/mainpage/mainpage.scss";
</style>
