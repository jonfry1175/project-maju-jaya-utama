import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileText,
  PieChart,
  BarChart3,
  Settings,
  Phone,
  ArrowRight,
  Activity,
  Zap,
  Shield,
  DollarSign,
  Clock,
  Award,
  Users,
  Building,
  Database,
  Eye,
  Briefcase,
  UserCheck,
  ClipboardCheck,
  BookOpen,
  Network,
  Search,
  Layers,
  Brain,
  HeartHandshake,
  GitBranch
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ManagementImprovementPlans = () => {
  const { t } = useTranslation("management-improvement-plans");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainObjectives = [
    {
      icon: TrendingUp,
      title: t("objectives.items.0.title"),
      description: t("objectives.items.0.description")
    },
    {
      icon: Eye,
      title: t("objectives.items.1.title"),
      description: t("objectives.items.1.description")
    },
    {
      icon: Building,
      title: t("objectives.items.2.title"),
      description: t("objectives.items.2.description")
    }
  ];

  const keyComponents = [
    {
      title: t("components.items.0.title"),
      icon: BookOpen,
      items: t("components.items.0.items", { returnObjects: true })
    },
    {
      title: t("components.items.1.title"),
      icon: GitBranch,
      items: t("components.items.1.items", { returnObjects: true })
    },
    {
      title: t("components.items.2.title"),
      icon: UserCheck,
      items: t("components.items.2.items", { returnObjects: true })
    },
    {
      title: t("components.items.3.title"),
      icon: ClipboardCheck,
      items: t("components.items.3.items", { returnObjects: true })
    },
    {
      title: t("components.items.4.title"),
      icon: Shield,
      items: t("components.items.4.items", { returnObjects: true })
    }
  ];

  const processFlow = [
    {
      icon: Search,
      title: t("process.steps.0.title"),
      description: t("process.steps.0.description")
    },
    {
      icon: Target,
      title: t("process.steps.1.title"),
      description: t("process.steps.1.description")
    },
    {
      icon: Users,
      title: t("process.steps.2.title"),
      description: t("process.steps.2.description")
    },
    {
      icon: Network,
      title: t("process.steps.3.title"),
      description: t("process.steps.3.description")
    },
    {
      icon: ClipboardCheck,
      title: t("process.steps.4.title"),
      description: t("process.steps.4.description")
    },
    {
      icon: HeartHandshake,
      title: t("process.steps.5.title"),
      description: t("process.steps.5.description")
    }
  ];

  const outputs = [
    {
      icon: Building,
      title: t("outputs.items.0.title"),
      description: t("outputs.items.0.description")
    },
    {
      icon: FileText,
      title: t("outputs.items.1.title"),
      description: t("outputs.items.1.description")
    },
    {
      icon: Award,
      title: t("outputs.items.2.title"),
      description: t("outputs.items.2.description")
    },
    {
      icon: ClipboardCheck,
      title: t("outputs.items.3.title"),
      description: t("outputs.items.3.description")
    },
    {
      icon: TrendingUp,
      title: t("outputs.items.4.title"),
      description: t("outputs.items.4.description")
    }
  ];

  const benefits = t("benefits.items", { returnObjects: true });

  const stats = [
    { icon: Clock, value: t("stats.items.0.value"), label: t("stats.items.0.label") },
    { icon: Award, value: t("stats.items.1.value"), label: t("stats.items.1.label") },
    { icon: Users, value: t("stats.items.2.value"), label: t("stats.items.2.label") },
    { icon: CheckCircle, value: t("stats.items.3.value"), label: t("stats.items.3.label") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding relative max-w-7xl mx-auto animate-section">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 rounded-2xl"></div>
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-primary/20">
              <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              {t("hero.badge")}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4 sm:mb-6 leading-tight">
              {t("hero.title")}
              <span className="text-white block mt-1 sm:mt-2">
                {t("hero.titleHighlight")}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Objectives Section */}
      <section className="section-padding animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                <Target className="icon-small mr-2" />
                {t("objectives.badge")}
              </div>
              
              <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                {t("objectives.title")}
              </h2>
              
              <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
                {t("objectives.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {mainObjectives.map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <Card key={index} className="group relative bg-white border border-subtle hover:border-primary-medium hover:shadow-xl transition-all duration-300 card-padding animate-card">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="icon-medium lg:icon-large text-white" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="heading-5 text-foreground mb-3 sm:mb-4">
                      {objective.title}
                    </h3>
                    
                    <p className="text-body-small text-muted-foreground">
                      {objective.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="section-padding bg-muted/30 animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                <Layers className="icon-small mr-2" />
                {t("components.badge")}
              </div>
              
              <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                {t("components.title")}
              </h2>
              
              <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
                {t("components.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {keyComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <Card key={index} className="bg-white border border-subtle hover:shadow-lg transition-all duration-300 card-padding animate-card">
                    <div className="flex items-start space-x-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="icon-small sm:icon-medium text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-5 text-foreground mb-2">
                          {component.title}
                        </h3>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {component.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-body-small">
                          <CheckCircle className="icon-small text-primary flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="section-padding bg-background animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary/20">
                <CheckCircle className="icon-small mr-2" />
                {t("process.badge")}
              </div>
              
              <h2 className="heading-2 font-bold text-primary font-display mb-4 leading-tight">
                {t("process.title")}
              </h2>
              
              <p className="text-body-large text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t("process.description")}
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
              
              <div className="space-y-8 lg:space-y-12">
                {processFlow.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`flex flex-col lg:flex-row items-center gap-6 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 text-center lg:text-left">
                      <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <h3 className="heading-5 font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-body text-muted-foreground mb-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10 border-4 border-primary/10">
                        <step.icon className="icon-large text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-body-small z-20">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1 hidden lg:block">
                      {/* Empty space for alternating layout */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outputs & Benefits Section */}
      <section className="section-padding bg-muted/30 animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                  <FileText className="icon-small mr-2" />
                  {t("outputs.badge")}
                </div>
                
                <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                  {t("outputs.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {outputs.map((output, index) => {
                  const Icon = output.icon;
                  return (
                    <Card key={index} className="bg-white border border-subtle hover:shadow-lg transition-all duration-300 card-padding text-center animate-card">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Icon className="icon-medium text-primary" />
                      </div>
                      
                      <h3 className="heading-6 text-foreground mb-2 sm:mb-3">
                        {output.title}
                      </h3>
                      
                      <p className="text-body-small text-muted-foreground">
                        {output.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card className="bg-white border border-primary-subtle animate-card">
              <div className="card-padding lg:card-padding-large text-center">
                <div className="inline-flex items-center bg-white text-primary px-3 sm:px-4 py-2 rounded-full text-body-small font-semibold mb-4 sm:mb-6 border border-primary-subtle">
                  <Award className="icon-small mr-2" />
                  {t("benefits.badge")}
                </div>
                
                <h2 className="heading-2 text-primary mb-6 sm:mb-8">
                  {t("benefits.title")}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center text-center">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="icon-small text-primary flex-shrink-0 mt-1" />
                        <span className="text-body text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="heading-2 text-primary mb-4 sm:mb-6">
                {t("stats.title")}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center card-padding bg-white border border-subtle animate-card">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="icon-medium lg:icon-large text-primary" />
                    </div>
                    <div className="heading-4 xl:heading-2 text-foreground mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-body-small lg:text-body text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30 animate-section">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <Card className="max-w-4xl mx-auto card-padding lg:card-padding-large bg-white border border-primary-subtle animate-card">
              <div className="text-center">
                <h3 className="heading-3 text-primary mb-3 sm:mb-4">
                  {t("cta.title")}
                </h3>
                <p className="text-body text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="btn-gradient-brand shadow-brand text-body font-semibold px-6 sm:px-8 group w-full sm:w-auto">
                    <Phone className="mr-2 icon-small" />
                    {t("cta.primaryButton")}
                    <ArrowRight className="ml-2 icon-small group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-body font-semibold px-6 sm:px-8 border-2 bg-white w-full sm:w-auto">
                    <FileText className="mr-2 icon-small" />
                    {t("cta.secondaryButton")}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagementImprovementPlans;