// Note: We remove the default "React" import because TS6133 complains it's unused.
// We still import the specific hooks from "react" so that TypeScript doesn't fail:
import { useEffect, useState, useRef } from "react";
import styles from "./LoadingCircle.module.css";

// ---------------------------------------------------------
// OLD LOADER (Spinner) Implementation
// ---------------------------------------------------------
function OldLoader() {
  const loadingMessages = [
    "Thinking...",
    "Looking at your site...",
    "Finding immediate opportunities...",
    "Tailoring value...",
    "Identifying your target audience...",
    "Split-testing potential setbacks...",
    "Analyzing test results...",
    "Refining for immediate impact...",
    "Running new A/B tests based on synthesized results...",
    "Crafting your blueprint for maximum success...",
    "Refining...",
    "Success! Processing...",
    "Success! Finalizing...",
    "Success! Integrating...",
    "Success! Validating...",
    "Success! Completing..."
  ];
  
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true); // True for fade-in, false for fade-out
  
  // Check if the message includes "Success!" to apply special styling
  const isSuccess = loadingMessages[messageIndex].includes("Success!");
  
  useEffect(() => {
    const updateMessage = () => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        // After fade-out completes, update the message and fade-in
        setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
        setFade(true); // Trigger fade-in
      }, 500); // Match the duration of the fade-out
    };
    
    // Change the message every 5 seconds
    const intervalId = setInterval(updateMessage, 5000);
    
    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, [loadingMessages.length]);
  
  return (
    // Instead of a separate container, we embed these visuals
    // in the same container as the advanced modules.
    <div className={styles["pai-dr-content"]} style={{ paddingBottom: "40px" }}>
      {/* Futuristic visualization replaces simple spinner */}
      <div className={styles["pai-dr-visualization"]}>
        {/* Core center circle */}
        <div className={styles["pai-dr-core"]}></div>
        
        {/* Rotating rings */}
        <div className={styles["pai-dr-ring-inner"]}></div>
        <div className={styles["pai-dr-ring-middle"]}></div>
        <div className={styles["pai-dr-ring-outer"]}></div>
        
        {/* Data points that appear and disappear */}
        <div className={styles["pai-dr-data-points"]}>
          <div className={styles["pai-dr-data-point"]}></div>
          <div className={styles["pai-dr-data-point"]}></div>
          <div className={styles["pai-dr-data-point"]}></div>
          <div className={styles["pai-dr-data-point"]}></div>
          <div className={styles["pai-dr-data-point"]}></div>
          <div className={styles["pai-dr-data-point"]}></div>
        </div>
        
        {/* Connection lines */}
        <div className={styles["pai-dr-data-connection"]}></div>
        <div className={styles["pai-dr-data-connection"]}></div>
        <div className={styles["pai-dr-data-connection"]}></div>
        <div className={styles["pai-dr-data-connection"]}></div>
        
        {/* Scan effect */}
        <div className={styles["pai-dr-scan"]}></div>
        
        {/* Background grid */}
        <div className={styles["pai-dr-grid"]}></div>
      </div>
      
      {/* Flying particles */}
      <div className={styles["pai-dr-particles-container"]}>
        <div className={styles["pai-dr-particle"]}></div>
        <div className={styles["pai-dr-particle"]}></div>
        <div className={styles["pai-dr-particle"]}></div>
        <div className={styles["pai-dr-particle"]}></div>
        <div className={styles["pai-dr-particle"]}></div>
        <div className={styles["pai-dr-particle"]}></div>
        <div className={styles["pai-dr-particle"]}></div>
        <div className={styles["pai-dr-particle"]}></div>
      </div>
      
      {/* Message with fade transition */}
      <div 
        className={
          ${styles["pai-dr-message"]} 
          ${fade ? styles["fade-in"] : styles["fade-out"]} 
          ${isSuccess ? styles["success"] : ""}
        }
      >
        {loadingMessages[messageIndex]}
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// NEW ADVANCED ANALYSIS Implementation
// ---------------------------------------------------------
function NewAnalysis() {
  // Helper to clamp numeric value
  function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }
  
  const TOTAL_MODULES = 12;
  
  // Rotating messages
  const loadingMessages = [
    "Initializing cross-domain analysis...",
    "Collecting multi-layer inputs...",
    "Identifying key data clusters...",
    "Evaluating potential anomalies...",
    "Aggregating deep indicators...",
    "Refining multi-dimensional signals...",
    "Applying heuristic predictions...",
    "Synthesizing correlation patterns...",
    "Pinpointing emergent insights...",
    "Compiling final intelligence...",
    "Analysis complete—preparing output..."
  ];
  
  // Base log lines
  const baseAnalysisLogLines = [
    "[Data] Real-time aggregator is standing by...",
    "[Data] Cross-checking system readiness...",
    "[System] GPU acceleration verified",
    "[System] CPU usage stable at 72%",
    "[Data] Checking correlation thresholds...",
    "[System] Memory usage stable at 1.2 GB / 8 GB",
    "[Data] Forecast model iteration #3 in progress...",
    "[System] All sub-processes stable",
    "[Data] Gathering final summary metrics..."
  ];
  
  // React states
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const progressIntervalRef = useRef<number | null>(null);
  
  const [logMessages, setLogMessages] = useState<string[]>([]);
  
  const totalDuration = 10;
  const topLoaderDuration = 8;
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  
  // Each module loading state
  const [moduleLoaded, setModuleLoaded] = useState<boolean[]>(
    Array(TOTAL_MODULES).fill(false)
  );
  
  // Ongoing "live" updates
  const [liveRandom, setLiveRandom] = useState({
    funnel: 0,
    bar: 0,
    gauge: 0,
    radar: 0,
    chord: 0,
    scatter: 0,
    bubble: 0,
    area: 0,
    line: 0,
    network: 0,
    heatmap: 0,
    donut: 0
  });
  
  // Master progress bar + timing
  useEffect(() => {
    if (progressIntervalRef.current) {
      window.clearInterval(progressIntervalRef.current);
    }
    
    const masterTimer = window.setInterval(() => {
      setTimeElapsed((current) => {
        if (current >= totalDuration) {
          return 0; // loop if surpasses 10s
        }
        return current + 1;
      });
    }, 1000);
    
    progressIntervalRef.current = window.setInterval(() => {
      setProgressPercent(() => {
        if (timeElapsed < topLoaderDuration) {
          const newVal = Math.min((timeElapsed / topLoaderDuration) * 100, 100);
          return newVal;
        } else {
          return 100;
        }
      });
    }, 300);
    
    return () => {
      window.clearInterval(masterTimer);
      if (progressIntervalRef.current) {
        window.clearInterval(progressIntervalRef.current);
      }
    };
  }, [timeElapsed, topLoaderDuration, totalDuration]);
  
  // Rotating messages (4s interval)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMessageIndex((prevIdx) => (prevIdx + 1) % loadingMessages.length);
        setFade(true);
      }, 300);
    }, 4000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [loadingMessages.length]);
  
  // VM startup logic
  useEffect(() => {
    moduleLoaded.forEach((loaded, i) => {
      if (!loaded) {
        const startDelay = Math.random() * 4000; // up to 4s
        setTimeout(() => {
          setLogMessages((prev) => [
            ...prev,
            [VM] Initializing advanced subsystem for environment ${i + 1}...,
            [VM] Loading dynamic libraries...,
            [VM] Starting Virtual Machine environment ${i + 1}...
          ]);
          const finishDelay = 1000 + Math.random() * 1500; // 1.0s - 2.5s
          setTimeout(() => {
            setLogMessages((prev) => [
              ...prev,
              [VM] Environment ${i + 1} is operational.
            ]);
            setModuleLoaded((prevStates) => {
              const updated = [...prevStates];
              updated[i] = true;
              return updated;
            });
          }, finishDelay);
        }, startDelay);
      }
    });
  }, [moduleLoaded]);
  
  // Additional periodic logs
  useEffect(() => {
    let currentIndex = 0;
    const analysisTimer = setInterval(() => {
      if (currentIndex < baseAnalysisLogLines.length) {
        setLogMessages((prev) => [...prev, baseAnalysisLogLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(analysisTimer);
      }
    }, 2000);
    
    return () => {
      clearInterval(analysisTimer);
    };
  }, [baseAnalysisLogLines]);
  
  // Continuous "live" data changes
  useEffect(() => {
    const liveUpdateTimer = setInterval(() => {
      setLiveRandom({
        funnel: Math.random() * 10 - 5,
        bar: Math.random() * 10 - 5,
        gauge: Math.random() * 3 - 1.5,
        radar: Math.random() * 2 - 1,
        chord: Math.random() * 2 - 1,
        scatter: Math.random() * 2 - 1,
        bubble: Math.random() * 2 - 1,
        area: Math.random() * 2 - 1,
        line: Math.random() * 2 - 1,
        network: Math.random() * 2 - 1,
        heatmap: Math.random() * 2 - 1,
        donut: Math.random() * 2 - 1
      });
    }, 1500);
    
    return () => {
      clearInterval(liveUpdateTimer);
    };
  }, []);
  
  // Animation classes
  const animationClasses = [
    styles.animation1,
    styles.animation2,
    styles.animation3,
    styles.animation4
  ];
  function getAnimationClass(i: number) {
    return animationClasses[i % animationClasses.length];
  }
  
  // 12 staggered delay classes
  const delayClasses = [
    styles.delay1,
    styles.delay2,
    styles.delay3,
    styles.delay4,
    styles.delay5,
    styles.delay6,
    styles.delay7,
    styles.delay8,
    styles.delay9,
    styles.delay10,
    styles.delay11,
    styles.delay12
  ];
  
  function renderModule(content: JSX.Element, moduleIndex: number) {
    const loaded = moduleLoaded[moduleIndex];
    return (
      <div
        className={
          ${styles.module} 
          ${getAnimationClass(moduleIndex)} 
          ${delayClasses[moduleIndex]}
        }
      >
        {!loaded && (
          <div className={styles.vmLoadingOverlay}>
            <div className={styles.vmBootLines}>
              <div>bootcfg.sys loaded</div>
              <div>vkernel.sys loaded</div>
              <div>hypervisor check: OK</div>
              <div className={styles.vmDotFlicker}>. . .</div>
              <div>Starting environment {moduleIndex + 1} ...</div>
            </div>
          </div>
        )}
        {loaded && content}
      </div>
    );
  }
  
  // Calculate gauge angle
  function getGaugeAngle(baseAngle: number, adjustDeg: number) {
    const angle = baseAngle + adjustDeg;
    return Math.max(0, Math.min(angle, 90));
  }
  
  return (
    <>
      {/* Container header */}
      <div className={styles.header}>Your Quantum Analysis In Process...</div>
      
      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div
          className={
            ${styles.progressBar} 
            ${progressPercent >= 100 ? styles.progressComplete : ""}
          }
          style={{ width: ${progressPercent}% }}
        >
          <div className={styles.progressGlow}></div>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.visualization}>
          {/* 1) FUNNEL */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Observational Data – Funnel
                </div>
                <div className={styles.windowStatus}>Live</div>
              </div>
              <div className={styles.moduleBody}>
                <div className={styles.funnelContainer}>
                  <div className={styles.funnelMetric} style={{ top: "10%" }}>
                    <span className={styles.label}>Data Points</span>
                    <span className={styles.value}>15,120</span>
                    <div
                      className={styles.bar}
                      style={{ width: ${clamp(100 + liveRandom.funnel, 0, 100)}% }}
                    ></div>
                  </div>
                  <div className={styles.funnelMetric} style={{ top: "35%" }}>
                    <span className={styles.label}>Key Observations</span>
                    <span className={styles.value}>9,304</span>
                    <div
                      className={styles.bar}
                      style={{ width: ${clamp(85 + liveRandom.funnel, 0, 100)}% }}
                    ></div>
                  </div>
                  <div className={styles.funnelMetric} style={{ top: "60%" }}>
                    <span className={styles.label}>Potential Patterns</span>
                    <span className={styles.value}>4,189</span>
                    <div
                      className={styles.bar}
                      style={{ width: ${clamp(65 + liveRandom.funnel, 0, 100)}% }}
                    ></div>
                  </div>
                  <div className={styles.funnelMetric} style={{ top: "85%" }}>
                    <span className={styles.label}>Core Insights</span>
                    <span className={styles.value}>2,532</span>
                    <div
                      className={styles.bar}
                      style={{ width: ${clamp(40 + liveRandom.funnel, 0, 100)}% }}
                    ></div>
                  </div>
                </div>
              </div>
            </>,
            0
          )}

          {/* 2) RADAR */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Multi-Faceted Radar – Insight Engine
                </div>
                <div className={styles.windowStatus}>Processing</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: scale(${1 + liveRandom.radar * 0.01})
                }}
              >
                <div className={styles.radarContainer}>
                  <div className={styles.radarChart}>
                    <div className={styles.radarAxis}></div>
                    <div className={styles.radarAxis}></div>
                    <div className={styles.radarAxis}></div>
                    <div className={styles.radarAxis}></div>
                    <div className={styles.radarAxis}></div>
                    <div className={styles.radarAxis}></div>
                    <div className={styles.radarCircle}></div>
                    <div className={styles.radarCircle}></div>
                    <div className={styles.radarCircle}></div>
                    <div className={styles.radarCircle}></div>
                    <div className={styles.radarValue}></div>
                    <div className={styles.radarValue}></div>
                    <div className={styles.radarValue}></div>
                    <div className={styles.radarValue}></div>
                    <div className={styles.radarValue}></div>
                    <div className={styles.radarValue}></div>
                    <div className={styles.radarArea}></div>
                  </div>
                </div>
              </div>
            </>,
            1
          )}

          {/* 3) AREA CHART */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Future Mapping – Predictive View
                </div>
                <div className={styles.windowStatus}>Analyzing</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: scale(${1 + liveRandom.area * 0.01})
                }}
              >
                <div className={styles.chartGrid}></div>
                <div className={styles.chartAxisX}></div>
                <div className={styles.chartAxisY}></div>
                <div className={styles.areaChartContainer}>
                  <div className={styles.areaPath}>
                    <div className={styles.area}></div>
                    <div className={styles.areaLine}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                    <div className={styles.dataPoint}></div>
                  </div>
                </div>
              </div>
            </>,
            2
          )}

          {/* 4) CHORD */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Comparative Markers – Matrix
                </div>
                <div className={styles.windowStatus}>Computing</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: translateY(${liveRandom.chord * 0.5}px)
                }}
              >
                <div className={styles.chordContainer}>
                  <div className={styles.chordCircle}></div>
                  <div className={styles.chordArc}></div>
                  <div className={styles.chordArc}></div>
                  <div className={styles.chordArc}></div>
                  <div className={styles.chord}></div>
                  <div className={styles.chord2}></div>
                </div>
              </div>
            </>,
            3
          )}

          {/* 5) SCATTER */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Multi-Variable Analysis – Factor Explorer
                </div>
                <div className={styles.windowStatus}>Active</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: rotate(${liveRandom.scatter * 0.5}deg)
                }}
              >
                <div className={styles.chartGrid}></div>
                <div className={styles.chartAxisX}></div>
                <div className={styles.chartAxisY}></div>
                <div className={styles.scatterContainer}>
                  <div className={styles.scatterPoint} data-value="high"></div>
                  <div className={styles.scatterPoint} data-value="medium"></div>
                  <div className={styles.scatterPoint} data-value="high"></div>
                  <div className={styles.scatterPoint} data-value="low"></div>
                  <div className={styles.scatterPoint} data-value="medium"></div>
                  <div className={styles.scatterPoint} data-value="low"></div>
                  <div className={styles.scatterPoint} data-value="medium"></div>
                  <div className={styles.scatterPoint} data-value="high"></div>
                  <div className={styles.scatterPoint} data-value="medium"></div>
                  <div className={styles.trendLine}></div>
                </div>
              </div>
            </>,
            4
          )}

          {/* 6) HEATMAP */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Association Mapping – Connection Grid
                </div>
                <div className={styles.windowStatus}>Calculating</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: scale(${1 + liveRandom.heatmap * 0.01})
                }}
              >
                <div className={styles.heatmapContainer}>
                  <div className={styles.heatmapGrid}>
                    {/* 25 cells */}
                    <div className={${styles.heatCell} ${styles.low}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles.low}}></div>
                    <div className={${styles.heatCell} ${styles.high}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles["very-high"]}}></div>
                    <div className={${styles.heatCell} ${styles.high}}></div>
                    <div className={${styles.heatCell} ${styles.low}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles.low}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles["very-high"]}}></div>
                    <div className={${styles.heatCell} ${styles.high}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles.high}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles.low}}></div>
                    <div className={${styles.heatCell} ${styles["very-high"]}}></div>
                    <div className={${styles.heatCell} ${styles.high}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles["very-high"]}}></div>
                    <div className={${styles.heatCell} ${styles.high}}></div>
                    <div className={${styles.heatCell} ${styles.medium}}></div>
                    <div className={${styles.heatCell} ${styles.low}}></div>
                  </div>
                  <div className={styles.xLabels}>
                    <span>Channel 1</span>
                    <span>Channel 2</span>
                    <span>Channel 3</span>
                    <span>Channel 4</span>
                    <span>Channel 5</span>
                  </div>
                  <div className={styles.yLabels} style={{ left: "13%" }}>
                    <span>A</span>
                    <span>B</span>
                    <span>C</span>
                    <span>D</span>
                    <span>E</span>
                  </div>
                </div>
              </div>
            </>,
            5
          )}

          {/* 7) DONUT */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Resource Index – Efficiency Pulse
                </div>
                <div className={styles.windowStatus}>Processing</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: rotate(${liveRandom.donut * 0.5}deg)
                }}
              >
                <div className={styles.donutContainer}>
                  <div className={styles.donutRing}></div>
                  <div className={${styles.donutSegment} ${styles.segment1}}></div>
                  <div className={${styles.donutSegment} ${styles.segment2}}></div>
                  <div className={${styles.donutSegment} ${styles.segment3}}></div>
                  <div className={styles.donutHole}></div>
                  <div className={styles.donutLabel}>
                    <div className={styles.value}>72%</div>
                    <div className={styles.text}>Utilization</div>
                  </div>
                  <div className={styles.legendItem} style={{ bottom: "25%" }}>
                    <span></span>Group A
                  </div>
                  <div className={styles.legendItem} style={{ bottom: "15%" }}>
                    <span></span>Group B
                  </div>
                  <div className={styles.legendItem} style={{ bottom: "5%" }}>
                    <span></span>Group C
                  </div>
                </div>
              </div>
            </>,
            6
          )}

          {/* 8) GAUGE */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Robustness Overview – Risk Evaluator
                </div>
                <div className={styles.windowStatus}>Measuring</div>
              </div>
              <div className={styles.moduleBody}>
                <div className={styles.gaugeContainer}>
                  <div className={styles.gaugeBackground}></div>
                  <div
                    className={styles.gaugeMeter}
                    style={{ transform: "scale(1) rotate(-90deg)" }}
                  ></div>
                  <div className={styles.gaugeCover}></div>
                  <div className={styles.gaugeTicks}>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                    <div className={styles.gaugeTick}></div>
                  </div>
                  <div
                    className={styles.gaugeNeedle}
                    style={{
                      transform: rotate(${getGaugeAngle(53, liveRandom.gauge)}deg)
                    }}
                  ></div>
                  <div className={styles.gaugeValue}>81% Stable</div>
                </div>
              </div>
            </>,
            7
          )}

          {/* 9) BAR CHART */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Performance Tiers – Efficiency Review
                </div>
                <div className={styles.windowStatus}>Calculating</div>
              </div>
              <div className={styles.moduleBody}>
                <div className={styles.chartGrid}></div>
                <div className={styles.chartAxisX}></div>
                <div className={styles.chartAxisY}></div>
                <div className={styles.barChartContainer}>
                  <div className={styles.barGroup}>
                    <div className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{
                          height: ${Math.max(0, Math.min(100, 55 + liveRandom.bar))}%
                        }}
                      ></div>
                      <div className={styles.barLabel}>Cat A</div>
                      <div className={styles.barValue}>58%</div>
                    </div>
                    <div className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{
                          height: ${Math.max(0, Math.min(100, 80 + liveRandom.bar))}%
                        }}
                      ></div>
                      <div className={styles.barLabel}>Cat B</div>
                      <div className={styles.barValue}>82%</div>
                    </div>
                    <div className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{
                          height: ${Math.max(0, Math.min(100, 68 + liveRandom.bar))}%
                        }}
                      ></div>
                      <div className={styles.barLabel}>Cat C</div>
                      <div className={styles.barValue}>71%</div>
                    </div>
                    <div className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{
                          height: ${Math.max(0, Math.min(100, 90 + liveRandom.bar))}%
                        }}
                      ></div>
                      <div className={styles.barLabel}>Cat D</div>
                      <div className={styles.barValue}>93%</div>
                    </div>
                    <div className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{
                          height: ${Math.max(0, Math.min(100, 77 + liveRandom.bar))}%
                        }}
                      ></div>
                      <div className={styles.barLabel}>Cat E</div>
                      <div className={styles.barValue}>79%</div>
                    </div>
                    <div className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{
                          height: ${Math.max(0, Math.min(100, 42 + liveRandom.bar))}%
                        }}
                      ></div>
                      <div className={styles.barLabel}>Cat F</div>
                      <div className={styles.barValue}>46%</div>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            8
          )}

          {/* 10) BUBBLE */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Clustering – Multi-Group Navigator
                </div>
                <div className={styles.windowStatus}>Mapping</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: scale(${1 + liveRandom.bubble * 0.01})
                }}
              >
                <div className={styles.chartGrid}></div>
                <div className={styles.chartAxisX}></div>
                <div className={styles.chartAxisY}></div>
                <div className={styles.bubbleContainer}>
                  <div className={styles.bubble}></div>
                  <div className={styles.bubble}></div>
                  <div className={styles.bubble}></div>
                  <div className={styles.bubbleLabel}>Group 1</div>
                  <div className={styles.bubbleLabel}>Group 2</div>
                  <div className={styles.bubbleLabel}>Group 3</div>
                  <div className={styles.bubbleValue}>14.2</div>
                  <div className={styles.bubbleValue}>9.1</div>
                  <div className={styles.bubbleValue}>4.3</div>
                </div>
              </div>
            </>,
            9
          )}

          {/* 11) LINE */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Forecasting – Trend Projections
                </div>
                <div className={styles.windowStatus}>Predicting</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: translateX(${liveRandom.line * 0.5}px)
                }}
              >
                <div className={styles.chartGrid}></div>
                <div className={styles.chartAxisX}></div>
                <div className={styles.chartAxisY}></div>
                <div className={styles.lineChartContainer}>
                  <div className={styles.lineChart}>
                    <div className={styles.lineBase}></div>
                    <div className={styles.linePath}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.linePoint}></div>
                    <div className={styles.lineFill}></div>
                  </div>
                </div>
              </div>
            </>,
            10
          )}

          {/* 12) NETWORK */}
          {renderModule(
            <>
              <div className={styles.macWindowBar}>
                <span className={styles.trafficLight} data-color="red" />
                <span className={styles.trafficLight} data-color="yellow" />
                <span className={styles.trafficLight} data-color="green" />
                <div className={styles.windowTitle}>
                  Topology Analysis – Network Synthesis
                </div>
                <div className={styles.windowStatus}>Running</div>
              </div>
              <div
                className={styles.moduleBody}
                style={{
                  transform: rotate(${liveRandom.network * 0.5}deg)
                }}
              >
                <div className={styles.chartGrid}></div>
                <div className={styles.networkContainer}>
                  <div className={styles.networkNode}></div>
                  <div className={styles.networkNode}></div>
                  <div className={styles.networkNode}></div>
                  <div className={styles.networkNode}></div>
                  <div className={styles.networkNode}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.networkLink}></div>
                  <div className={styles.nodeLabel}>Primary</div>
                  <div className={styles.nodeLabel}>Secondary</div>
                  <div className={styles.nodeLabel}>Tertiary</div>
                  <div className={styles.nodeLabel}>Quaternary</div>
                  <div className={styles.nodeLabel}>Central</div>
                </div>
              </div>
            </>,
            11
          )}
        </div>
        
        {/* Single-line rotating message */}
        <div className={${styles.message} ${fade ? styles.fadeIn : styles.fadeOut}}>
          {loadingMessages[messageIndex]}
        </div>
        
        {/* Live log area */}
        <div className={styles.analysisLog}>
          {logMessages.map((line, idx) => (
            <div key={idx} className={styles.logLine}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------
// FINAL COMBINED COMPONENT
// ---------------------------------------------------------
export default function CombinedLoader() {
  return (
    <div className={styles.container}>
      {/* 
        Render the old spinner at the very top (no black header),
        then new analysis below it. 
      */}
      <OldLoader />
      
      {/* Subtle optional spacing */}
      <div style={{ marginTop: "20px" }} />
      
      <NewAnalysis />
    </div>
  );
}

—

/* -------------------------------------------------------------------
   OLD LOADER (Prognostic AI) STYLES
   ------------------------------------------------------------------- */

/* 
   We do NOT need a separate .prognostic-ai-demo-results-container 
   because everything is now inside .container from the new code. 
   However, we keep the classes for reference. 
*/

/* Overwrite or unify color references to match the new color palette if desired */

/* 
   .pai-dr-header {
       display: none; 
   } 
   Removed or set to display none, as requested 
*/

/* Content area that used to be .pai-dr-content 
   We'll keep the class name but it now sits inside the .container. 
*/

.pai-dr-content {
  background-color: transparent; /* unify with new container’s BG */
  padding: 30px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  /* No border-radius, no box-shadow, to seamlessly blend inside the parent */
}

/* Futuristic visualization container */
.pai-dr-visualization {
  position: relative;
  width: 180px;
  height: 180px;
  margin-bottom: 40px;
}

/* Core central circle 
   We might shift #252525 to a deeper purple or neutral gray. 
   Keep the code, but consider a color override if desired. 
*/
.pai-dr-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-color: #252525; 
  border-radius: 50%;
  z-index: 5;
  box-shadow: 0 0 10px rgba(37, 37, 37, 0.3);
}

/* Inner rotating ring */
.pai-dr-ring-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 2px solid rgba(37, 37, 37, 0.1);
  border-top: 2px solid #252525;
  border-radius: 50%;
  animation: pai-dr-spin-inner 3s linear infinite;
}

/* Middle rotating ring */
.pai-dr-ring-middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border: 1px solid rgba(37, 37, 37, 0.05);
  border-left: 1px solid #252525;
  border-radius: 50%;
  animation: pai-dr-spin-middle 7s linear infinite;
}

/* Outer rotating ring */
.pai-dr-ring-outer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  border: 1px dashed rgba(37, 37, 37, 0.05);
  border-right: 1px solid rgba(37, 37, 37, 0.6);
  border-radius: 50%;
  animation: pai-dr-spin-outer 15s linear infinite;
}

/* Data points that appear and disappear */
.pai-dr-data-points {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}
.pai-dr-data-point {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #252525;
  border-radius: 50%;
  opacity: 0;
}

/* Data points around the circle */
.pai-dr-data-point:nth-child(1) {
  top: 30%;
  left: 10%;
  animation: data-point-pulse 5s ease-in-out infinite;
  animation-delay: 0.2s;
}
.pai-dr-data-point:nth-child(2) {
  top: 70%;
  left: 20%;
  animation: data-point-pulse 7s ease-in-out infinite;
  animation-delay: 1.5s;
}
.pai-dr-data-point:nth-child(3) {
  top: 20%;
  left: 80%;
  animation: data-point-pulse 6s ease-in-out infinite;
  animation-delay: 0.7s;
}
.pai-dr-data-point:nth-child(4) {
  top: 60%;
  left: 85%;
  animation: data-point-pulse 8s ease-in-out infinite;
  animation-delay: 2.1s;
}
.pai-dr-data-point:nth-child(5) {
  top: 40%;
  left: 50%;
  animation: data-point-pulse 4s ease-in-out infinite;
  animation-delay: 1.2s;
}
.pai-dr-data-point:nth-child(6) {
  top: 80%;
  left: 50%;
  animation: data-point-pulse 6s ease-in-out infinite;
  animation-delay: 3.5s;
}

/* Connection lines between data points */
.pai-dr-data-connection {
  position: absolute;
  background-color: rgba(37, 37, 37, 0.1);
  transform-origin: 0 0;
  z-index: 3;
  opacity: 0;
}
.pai-dr-data-connection:nth-child(1) {
  top: 32%;
  left: 12%;
  width: 50px;
  height: 1px;
  transform: rotate(30deg);
  animation: connection-appear 4s ease-in-out infinite;
  animation-delay: 0.3s;
}
.pai-dr-data-connection:nth-child(2) {
  top: 72%;
  left: 22%;
  width: 70px;
  height: 1px;
  transform: rotate(-15deg);
  animation: connection-appear 6s ease-in-out infinite;
  animation-delay: 1.7s;
}
.pai-dr-data-connection:nth-child(3) {
  top: 22%;
  left: 78%;
  width: 60px;
  height: 1px;
  transform: rotate(150deg);
  animation: connection-appear 5s ease-in-out infinite;
  animation-delay: 0.9s;
}
.pai-dr-data-connection:nth-child(4) {
  top: 62%;
  left: 83%;
  width: 55px;
  height: 1px;
  transform: rotate(200deg);
  animation: connection-appear 7s ease-in-out infinite;
  animation-delay: 2.3s;
}

/* Glowing scan effect */
.pai-dr-scan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, transparent 30%, rgba(37, 37, 37, 0.03) 60%, transparent 70%);
  border-radius: 50%;
  z-index: 2;
  animation: scan-pulse 4s ease-in-out infinite;
}

/* Background grid for futuristic effect */
.pai-dr-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 20px 20px;
  background-image: radial-gradient(circle, rgba(37, 37, 37, 0.1) 1px, transparent 1px);
  z-index: 1;
  opacity: 0.3;
}

/* Message display */
.pai-dr-message {
  font-size: 20px;
  color: #333;
  text-align: center;
  opacity: 1;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  font-weight: 500;
  letter-spacing: 0.3px;
  position: relative;
  z-index: 6;
  margin-top: 20px; 
}

.fade-out {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* Success message styling */
.pai-dr-message.success {
  color: #252525;
  font-weight: 600;
}

/* Button styling - not used in final version, but kept for completeness */
.pai-dr-button {
  display: inline-block;
  background-color: #252525;
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.pai-dr-button:hover {
  background-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Animation keyframes (old loader) */
@keyframes pai-dr-spin-inner {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes pai-dr-spin-middle {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(-360deg); }
}
@keyframes pai-dr-spin-outer {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes data-point-pulse {
  0%, 100% { opacity: 0; transform: scale(0); }
  20% { opacity: 0.2; transform: scale(1); }
  40% { opacity: 0.8; transform: scale(2); }
  60% { opacity: 0.4; transform: scale(1.5); }
  80% { opacity: 0.1; transform: scale(1); }
}
@keyframes connection-appear {
  0%, 100% { opacity: 0; }
  30%, 70% { opacity: 0.7; }
}
@keyframes scan-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
}

/* Flying data particles effect */
.pai-dr-particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}
.pai-dr-particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: rgba(37, 37, 37, 0.2);
  border-radius: 50%;
}
.pai-dr-particle:nth-child(1) {
  top: 20%;
  left: -5%;
  animation: particle-move 7s linear infinite;
}
.pai-dr-particle:nth-child(2) {
  top: 70%;
  left: -5%;
  animation: particle-move 8s linear infinite 1s;
}
.pai-dr-particle:nth-child(3) {
  top: 40%;
  left: -5%;
  animation: particle-move 6s linear infinite 2s;
}
.pai-dr-particle:nth-child(4) {
  top: 30%;
  left: -5%;
  animation: particle-move 9s linear infinite 3s;
}
.pai-dr-particle:nth-child(5) {
  top: 60%;
  left: -5%;
  animation: particle-move 7s linear infinite 4s;
}
.pai-dr-particle:nth-child(6) {
  top: 80%;
  left: -5%;
  animation: particle-move 10s linear infinite 0.5s;
}
.pai-dr-particle:nth-child(7) {
  top: 50%;
  left: -5%;
  animation: particle-move 8s linear infinite 2.5s;
}
.pai-dr-particle:nth-child(8) {
  top: 10%;
  left: -5%;
  animation: particle-move 6s linear infinite 1.5s;
}
@keyframes particle-move {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  10% { opacity: 0.4; }
  90% { opacity: 0.4; }
  100% {
    transform: translateX(105vw) translateY(20px);
    opacity: 0;
  }
}

/* OLD loader responsiveness */
@media (max-width: 600px) {
  .pai-dr-content {
    padding: 20px;
    min-height: 300px;
  }
  .pai-dr-visualization {
    width: 150px;
    height: 150px;
  }
  .pai-dr-ring-outer {
    width: 130px;
    height: 130px;
  }
  .pai-dr-ring-middle {
    width: 100px;
    height: 100px;
  }
  .pai-dr-ring-inner {
    width: 70px;
    height: 70px;
  }
  .pai-dr-message {
    font-size: 18px;
  }
}

/* -------------------------------------------------------------------
   NEW ADVANCED ANALYSIS MODULE STYLES (COMBINED FINAL)
   ------------------------------------------------------------------- */

.container {
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #F8F8F8;
  position: relative;
  width: 100% !important;
  max-width: 1200px !important;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #ECECEC;
  margin-bottom: 40px;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom right, rgba(149,82,211,0.08) 0%, transparent 70%);
  z-index: 0;
}

.header {
  padding: 16px 20px;
  color: #252525;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.3;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #ECECEC;
}

/********************************************************
  PROGRESS BAR
********************************************************/
.progressContainer {
  width: 100%;
  height: 4px;
  background-color: #E8EAF0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.progressBar {
  height: 100%;
  background: linear-gradient(90deg, #9552D3, #BC73ED);
  transition: width 0.3s ease-out;
  position: relative;
}
.progressGlow {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30px;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0),
    rgba(255,255,255,0.6),
    rgba(255,255,255,0)
  );
  animation: glowLoop 2s ease-out infinite;
}
@keyframes glowLoop {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
.progressComplete {
  animation: blinkBar 1s infinite alternate ease-in-out;
}
@keyframes blinkBar {
  0% { opacity: 1; }
  100% { opacity: 0.85; }
}

/********************************************************
  CONTENT AREA
********************************************************/
.content {
  background-color: white;
  padding: 30px 15px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.visualization {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 180px);
  gap: 15px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
}

/********************************************************
  MODULE LAYOUT
********************************************************/
.module {
  position: relative;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  overflow: hidden;
  opacity: 0;
  z-index: 2;
  transform-origin: center center;
}

.module:nth-of-type(1) { grid-column: 1; grid-row: 1; }
.module:nth-of-type(2) { grid-column: 2; grid-row: 1; }
.module:nth-of-type(3) { grid-column: 3; grid-row: 1; }
.module:nth-of-type(4) { grid-column: 1; grid-row: 2; }
.module:nth-of-type(5) { grid-column: 2; grid-row: 2; }
.module:nth-of-type(6) { grid-column: 3; grid-row: 2; }
.module:nth-of-type(7) { grid-column: 1; grid-row: 3; }
.module:nth-of-type(8) { grid-column: 2; grid-row: 3; }
.module:nth-of-type(9) { grid-column: 3; grid-row: 3; }
.module:nth-of-type(10) { grid-column: 1; grid-row: 4; }
.module:nth-of-type(11) { grid-column: 2; grid-row: 4; }
.module:nth-of-type(12) { grid-column: 3; grid-row: 4; }

/********************************************************
  MODULE FLY-IN ANIMATIONS
********************************************************/
@keyframes flyInWithBounce {
  0% { transform: translateY(-300px) scale(0.9); opacity: 0; }
  70% { transform: translateY(15px) scale(1.02); opacity: 0.9; }
  85% { transform: translateY(-8px) scale(0.98); opacity: 0.95; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes flyInFromSide {
  0% { transform: translateX(-300px) scale(0.9); opacity: 0; }
  70% { transform: translateX(15px) scale(1.02); opacity: 0.9; }
  85% { transform: translateX(-8px) scale(0.98); opacity: 0.95; }
  100% { transform: translateX(0) scale(1); opacity: 1; }
}
@keyframes zoomInWithFade {
  0% { transform: scale(0.7); opacity: 0; }
  60% { transform: scale(1.05); opacity: 0.8; }
  80% { transform: scale(0.97); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes slideUpWithShadow {
  0% { transform: translateY(100px); opacity: 0; }
  70% { 
    transform: translateY(-10px); 
    opacity: 0.8; 
    box-shadow: 0 8px 20px rgba(0,0,0,0.1); 
  }
  85% { 
    transform: translateY(5px); 
    opacity: 0.9; 
    box-shadow: 0 5px 15px rgba(0,0,0,0.08); 
  }
  100% { 
    transform: translateY(0); 
    opacity: 1; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.06); 
  }
}

.animation1 { animation: flyInWithBounce 0.7s forwards ease-out; }
.animation2 { animation: flyInFromSide 0.8s forwards ease-out; }
.animation3 { animation: zoomInWithFade 0.9s forwards ease-out; }
.animation4 { animation: slideUpWithShadow 0.75s forwards ease-out; }

.delay1 { animation-delay: 0.1s; }
.delay2 { animation-delay: 0.4s; }
.delay3 { animation-delay: 0.7s; }
.delay4 { animation-delay: 0.25s; }
.delay5 { animation-delay: 0.55s; }
.delay6 { animation-delay: 0.9s; }
.delay7 { animation-delay: 0.3s; }
.delay8 { animation-delay: 0.65s; }
.delay9 { animation-delay: 0.85s; }
.delay10 { animation-delay: 0.15s; }
.delay11 { animation-delay: 0.5s; }
.delay12 { animation-delay: 0.75s; }

/********************************************************
  VM LOADING OVERLAY
********************************************************/
.vmLoadingOverlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.vmBootLines {
  color: #8DE8AD;
  font-family: "Source Code Pro", monospace;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: flickerScreen 2s infinite;
}
.vmDotFlicker {
  margin: 6px 0;
  animation: dotFlicker 1.8s infinite;
}
@keyframes dotFlicker {
  0% { opacity: 1; }
  50% { opacity: 0.2; }
  100% { opacity: 1; }
}
@keyframes flickerScreen {
  0% { opacity: 1; }
  80% { opacity: 0.98; }
  95% { opacity: 0.9; }
  100% { opacity: 1; }
}

/********************************************************
  MAC WINDOW BAR
********************************************************/
.macWindowBar {
  height: 26px;
  background: linear-gradient(to bottom, #f6f6f6, #e6e6e6);
  display: flex;
  align-items: center;
  padding-left: 8px;
  border-bottom: 1px solid #d2d2d2;
}
.trafficLight {
  width: 12px; 
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  position: relative;
}
.trafficLight::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%);
}
.trafficLight[data-color="red"]    { background-color: #ff5f56; box-shadow: 0 0 1px rgba(0,0,0,0.2);}
.trafficLight[data-color="yellow"] { background-color: #ffbd2e; box-shadow: 0 0 1px rgba(0,0,0,0.2);}
.trafficLight[data-color="green"]  { background-color: #27c93f; box-shadow: 0 0 1px rgba(0,0,0,0.2);}
.windowTitle {
  font-size: 11px;
  font-weight: 600;
  margin-left: 10px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 0 rgba(255,255,255,0.7);
}
.windowStatus {
  margin-left: auto;
  margin-right: 8px;
  font-size: 10px;
  color: #666;
  background-color: rgba(0,0,0,0.05);
  padding: 2px 6px;
  border-radius: 3px;
  letter-spacing: 0.5px;
  animation: statusBlink 3s infinite alternate;
}
@keyframes statusBlink {
  0%, 80% { color: #666; }
  90%, 100% { color: #9552D3; }
}
.moduleBody {
  width: 100%;
  height: calc(100% - 26px);
  position: relative;
  padding: 6px;
  overflow: hidden;
  background-color: #fbfbfb;
}

/********************************************************
  REALISTIC DATA GRID - BASE FOR ALL CHARTS
********************************************************/
.chartGrid {
  position: absolute;
  top: 6%;
  left: 6%;
  right: 6%;
  bottom: 12%;
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}
.chartAxisX, .chartAxisY {
  position: absolute;
  background-color: rgba(0,0,0,0.2);
}
.chartAxisX {
  bottom: 12%;
  left: 6%;
  width: 88%;
  height: 1px;
}
.chartAxisY {
  bottom: 12%;
  left: 6%;
  width: 1px;
  height: 82%;
}
.chartAxisX::after, .chartAxisY::after {
  content: '';
  position: absolute;
  border-style: solid;
}
.chartAxisX::after {
  right: -6px;
  top: -3px;
  border-width: 3px 0 3px 6px;
  border-color: transparent transparent transparent rgba(0,0,0,0.2);
}
.chartAxisY::after {
  left: -3px;
  top: -6px;
  border-width: 0 3px 6px 3px;
  border-color: transparent transparent rgba(0,0,0,0.2) transparent;
}

/********************************************************
  1) FUNNEL
********************************************************/
.funnelContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.funnelMetric {
  position: absolute;
  height: 22px;
  width: calc(100% - 30px);
  left: 15px;
  background: rgba(149,82,211,0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 10px;
  color: #333;
  animation: metricPopulate 1s forwards;
  transform-origin: left;
  opacity: 0;
}
.funnelMetric .label { flex: 1; text-align: left; font-weight: 500; }
.funnelMetric .value { font-weight: 600; color: #9552D3; }
.funnelMetric .bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(149,82,211,0.2), rgba(188,115,237,0.2));
  border-radius: 4px;
  z-index: -1;
  animation: barGrow 1.5s forwards ease-out;
  transform-origin: left;
  transform: scaleX(0);
}
@keyframes metricPopulate {
  0% { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes barGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/********************************************************
  2) RADAR
********************************************************/
.radarContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.radarChart {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
}
.radarAxis {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 45%;
  height: 1px;
  background-color: rgba(0,0,0,0.1);
  transform-origin: left center;
}
.radarAxis:nth-child(1) { transform: rotate(0deg); }
.radarAxis:nth-child(2) { transform: rotate(60deg); }
.radarAxis:nth-child(3) { transform: rotate(120deg); }
.radarAxis:nth-child(4) { transform: rotate(180deg); }
.radarAxis:nth-child(5) { transform: rotate(240deg); }
.radarAxis:nth-child(6) { transform: rotate(300deg); }
.radarCircle {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed rgba(0,0,0,0.1);
  transform: translate(-50%, -50%);
}
.radarCircle:nth-child(7)  { width: 90%; height: 90%; }
.radarCircle:nth-child(8)  { width: 70%; height: 70%; }
.radarCircle:nth-child(9)  { width: 50%; height: 50%; }
.radarCircle:nth-child(10) { width: 30%; height: 30%; }
.radarValue {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(149,82,211,0.7);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  opacity: 0;
  box-shadow: 0 0 5px rgba(149,82,211,0.5);
  animation: radarValueAppear 0.5s forwards;
}
.radarValue:nth-child(11) { transform: translate(calc(-50% + 40%), calc(-50% - 5%));  animation-delay: 1.0s; }
.radarValue:nth-child(12) { transform: translate(calc(-50% + 15%), calc(-50% - 35%)); animation-delay: 1.3s; }
.radarValue:nth-child(13) { transform: translate(calc(-50% - 20%), calc(-50% - 30%)); animation-delay: 1.6s; }
.radarValue:nth-child(14) { transform: translate(calc(-50% - 40%), calc(-50% + 0%));  animation-delay: 1.9s; }
.radarValue:nth-child(15) { transform: translate(calc(-50% - 10%), calc(-50% + 30%)); animation-delay: 2.2s; }
.radarValue:nth-child(16) { transform: translate(calc(-50% + 25%), calc(-50% + 20%)); animation-delay: 2.5s; }
.radarArea {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  clip-path: polygon(
    calc(50% + 40%) calc(50% - 5%), 
    calc(50% + 15%) calc(50% - 35%), 
    calc(50% - 20%) calc(50% - 30%), 
    calc(50% - 40%) calc(50% + 0%), 
    calc(50% - 10%) calc(50% + 30%), 
    calc(50% + 25%) calc(50% + 20%)
  );
  background-color: rgba(149,82,211,0.2);
  opacity: 0;
  animation: radarAreaAppear 1s forwards ease-out 2.8s;
}
@keyframes radarValueAppear {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
@keyframes radarAreaAppear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/********************************************************
  3) AREA CHART
********************************************************/
.areaChartContainer { position: relative; width: 100%; height: 100%; }
.areaPath {
  position: absolute;
  bottom: 12%;
  left: 6%;
  width: 88%;
  height: 82%;
  overflow: hidden;
}
.area {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(149,82,211,0.2) 0%, rgba(149,82,211,0.05) 100%);
  clip-path: polygon(
    0% 100%,
    0% 80%,
    10% 75%,
    20% 65%,
    30% 70%,
    40% 60%,
    50% 40%,
    60% 45%,
    70% 35%,
    80% 25%,
    90% 30%,
    100% 20%,
    100% 100%
  );
  transform: scaleX(0);
  transform-origin: left;
  animation: areaGrow 2s forwards ease-out 1s;
}
.areaLine {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  overflow: visible;
}
.areaLine::before {
  content: '';
  position: absolute;
  border-top: 2px solid rgba(149,82,211,0.8);
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0% 80%,
    10% 75%,
    20% 65%,
    30% 70%,
    40% 60%,
    50% 40%,
    60% 45%,
    70% 35%,
    80% 25%,
    90% 30%,
    100% 20%
  );
  transform: scaleX(0);
  transform-origin: left;
  animation: areaGrow 2.4s forwards ease-out 1.2s;
}
.dataPoint {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #9552D3;
  transform: translate(-50%, 50%) scale(0);
  box-shadow: 0 0 0 2px rgba(255,255,255,0.7);
  animation: pointAppear 0.4s forwards ease-out;
}
.dataPoint:nth-child(3)  { bottom: 80%; left: 0%;   animation-delay: 1.4s; }
.dataPoint:nth-child(4)  { bottom: 75%; left: 10%;  animation-delay: 1.5s; }
.dataPoint:nth-child(5)  { bottom: 65%; left: 20%;  animation-delay: 1.6s; }
.dataPoint:nth-child(6)  { bottom: 70%; left: 30%;  animation-delay: 1.7s; }
.dataPoint:nth-child(7)  { bottom: 60%; left: 40%;  animation-delay: 1.8s; }
.dataPoint:nth-child(8)  { bottom: 40%; left: 50%;  animation-delay: 1.9s; }
.dataPoint:nth-child(9)  { bottom: 45%; left: 60%;  animation-delay: 2.0s; }
.dataPoint:nth-child(10) { bottom: 35%; left: 70%;  animation-delay: 2.1s; }
.dataPoint:nth-child(11) { bottom: 25%; left: 80%;  animation-delay: 2.2s; }
.dataPoint:nth-child(12) { bottom: 30%; left: 90%;  animation-delay: 2.3s; }
.dataPoint:nth-child(13) { bottom: 20%; left: 100%; animation-delay: 2.4s; }
@keyframes areaGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
@keyframes pointAppear {
  0% { transform: translate(-50%, 50%) scale(0); }
  70% { transform: translate(-50%, 50%) scale(1.5); }
  100% { transform: translate(-50%, 50%) scale(1); }
}

/********************************************************
  4) CHORD
********************************************************/
.chordContainer { position: relative; width: 100%; height: 100%; }
.chordCircle {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.1);
}
.chordArc {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  overflow: visible;
}
.chordArc::before,
.chordArc::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #9552D3;
  opacity: 0;
  animation: arcPointAppear 0.7s forwards ease-out;
  transform: translate(-50%, -50%);
}
@keyframes arcPointAppear {
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.chordSegment {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 35%;
  background-color: rgba(149,82,211,0.8);
  transform-origin: bottom center;
  transform: rotate(0deg) scaleY(0);
  animation: segmentGrow 1s forwards ease-out;
  opacity: 0.8;
}
.chord {
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.chord2 {
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}
@keyframes segmentGrow {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}

/********************************************************
  5) SCATTER
********************************************************/
.scatterContainer { position: relative; width: 100%; height: 100%; }
.scatterPoint {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(149,82,211,0.7);
  transform: scale(0);
  opacity: 0;
  animation: scatterAppear 0.8s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 5px rgba(149,82,211,0.3);
}
.scatterPoint[data-value="high"]   { width: 12px; height: 12px; }
.scatterPoint[data-value="medium"] { width: 9px;  height: 9px;  }
.scatterPoint[data-value="low"]    { width: 6px;  height: 6px;  }
.scatterPoint:nth-child(1) { left: 18%; top: 25%; animation-delay: 0.7s; }
.scatterPoint:nth-child(2) { left: 32%; top: 45%; animation-delay: 0.9s; }
.scatterPoint:nth-child(3) { left: 45%; top: 20%; animation-delay: 1.1s; }
.scatterPoint:nth-child(4) { left: 60%; top: 60%; animation-delay: 1.3s; }
.scatterPoint:nth-child(5) { left: 75%; top: 35%; animation-delay: 1.5s; }
.scatterPoint:nth-child(6) { left: 25%; top: 70%; animation-delay: 1.7s; }
.scatterPoint:nth-child(7) { left: 48%; top: 75%; animation-delay: 1.9s; }
.scatterPoint:nth-child(8) { left: 70%; top: 78%; animation-delay: 2.1s; }
.scatterPoint:nth-child(9) { left: 85%; top: 55%; animation-delay: 2.3s; }
.trendLine {
  position: absolute;
  width: 75%;
  height: 2px;
  bottom: 30%;
  left: 15%;
  background-color: rgba(188,115,237,0.4);
  transform: scaleX(0) rotate(25deg);
  transform-origin: left;
  animation: trendLineGrow 1.5s forwards ease-out 2.5s;
}
@keyframes scatterAppear {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes trendLineGrow {
  0% { transform: scaleX(0) rotate(25deg); }
  100% { transform: scaleX(1) rotate(25deg); }
}

/********************************************************
  6) HEATMAP
********************************************************/
.heatmapContainer { position: relative; width: 100%; height: 100%; }
.heatmapGrid {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 3px;
}
.heatCell {
  background-color: rgba(149,82,211,0.05);
  border-radius: 2px;
  transform: scale(0);
  animation: heatCellAppear 0.4s forwards ease-out;
}
.heatCell.low       { background-color: rgba(149,82,211,0.1); }
.heatCell.medium    { background-color: rgba(149,82,211,0.3); }
.heatCell.high      { background-color: rgba(149,82,211,0.6); }
.heatCell.very-high { background-color: rgba(149,82,211,0.9); }
.xLabels, .yLabels {
  position: absolute;
  display: flex;
  justify-content: space-between;
}
.xLabels {
  bottom: 8%;
  left: 15%;
  width: 70%;
}
.yLabels {
  top: 15%;
  flex-direction: column;
  height: 70%;
}
.xLabels span, .yLabels span {
  font-size: 8px;
  color: #666;
}
@keyframes heatCellAppear {
  0% { transform: scale(0); }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/********************************************************
  7) DONUT
********************************************************/
.donutContainer {
  position: relative;
  width: 70%;
  height: 70%;
  margin: 5% auto;
}
.donutRing {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f2f2f2;
  overflow: hidden;
  transform: rotate(-90deg);
}
.donutSegment {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  opacity: 0;
  animation: segmentAppear 1s forwards ease-out;
}
.segment1 {
  background: conic-gradient(#9552D3 0% 42%, transparent 42% 100%);
  animation-delay: 0.8s;
}
.segment2 {
  background: conic-gradient(transparent 0% 42%, #BC73ED 42% 68%, transparent 68% 100%);
  animation-delay: 1.4s;
}
.segment3 {
  background: conic-gradient(transparent 0% 68%, rgba(105, 73, 140, 0.7) 68% 100%);
  animation-delay: 2.0s;
}
.donutHole {
  position: absolute;
  width: 60%;
  height: 60%;
  background-color: white;
  border-radius: 50%;
  top: 20%;
  left: 20%;
  z-index: 3;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
}
.donutLabel {
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  top: 20%;
  left: 20%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  animation: labelAppear 0.8s forwards ease-out 2.6s;
}
.donutLabel .value {
  font-size: 16px;
  font-weight: 600;
  color: #9552D3;
}
.donutLabel .text {
  font-size: 8px;
  color: #666;
  margin-top: 2px;
}
.legendItem {
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 8px;
  color: #333;
  opacity: 0;
  animation: legendAppear 0.5s forwards ease-out;
}
.legendItem span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  margin-right: 4px;
}
@keyframes segmentAppear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes labelAppear {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes legendAppear {
  0% { transform: translateX(-10px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

/********************************************************
  8) GAUGE
********************************************************/
.gaugeContainer {
  position: relative;
  width: 80%;
  height: 60%;
  margin: 15% auto 0 auto;
  overflow: visible;
}
.gaugeBackground {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f6f6f6, #ececec);
  border-radius: 100px 100px 0 0;
  overflow: hidden;
}
.gaugeMeter {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 10%;
  left: 5%;
  border-radius: 90px 90px 0 0;
  background: conic-gradient(
    #ff6b6b 0% 33%, 
    #ffc107 33% 67%, 
    #28a745 67% 100%
  );
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform-origin: center bottom;
  transform: scale(0);
  animation: gaugeAppear 1s forwards ease-out 1s;
}
.gaugeCover {
  position: absolute;
  width: 70%;
  height: 70%;
  bottom: 0%;
  left: 15%;
  border-radius: 70px 70px 0 0;
  background-color: white;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.gaugeTicks {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.gaugeTick {
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: rgba(0,0,0,0.2);
  transform-origin: center bottom;
  bottom: 0;
  left: calc(50% - 1px);
  opacity: 0;
  animation: tickAppear 0.3s forwards ease-out;
}
.gaugeTick:nth-child(1)  { transform: rotate(-90deg); animation-delay: 0.3s; }
.gaugeTick:nth-child(2)  { transform: rotate(-75deg); animation-delay: 0.4s; }
.gaugeTick:nth-child(3)  { transform: rotate(-60deg); animation-delay: 0.5s; }
.gaugeTick:nth-child(4)  { transform: rotate(-45deg); animation-delay: 0.6s; }
.gaugeTick:nth-child(5)  { transform: rotate(-30deg); animation-delay: 0.7s; }
.gaugeTick:nth-child(6)  { transform: rotate(-15deg); animation-delay: 0.8s; }
.gaugeTick:nth-child(7)  { transform: rotate(0deg);   animation-delay: 0.9s; }
.gaugeTick:nth-child(8)  { transform: rotate(15deg);  animation-delay: 1.0s; }
.gaugeTick:nth-child(9)  { transform: rotate(30deg);  animation-delay: 1.1s; }
.gaugeTick:nth-child(10) { transform: rotate(45deg);  animation-delay: 1.2s; }
.gaugeTick:nth-child(11) { transform: rotate(60deg);  animation-delay: 1.3s; }
.gaugeTick:nth-child(12) { transform: rotate(75deg);  animation-delay: 1.4s; }
.gaugeTick:nth-child(13) { transform: rotate(90deg);  animation-delay: 1.5s; }
.gaugeNeedle {
  position: absolute;
  width: 3px;
  height: 80%;
  background-color: #333;
  bottom: 0;
  left: calc(50% - 1.5px);
  transform-origin: bottom center;
  transform: rotate(-70deg);
  z-index: 10;
  opacity: 0;
  border-radius: 3px 3px 0 0;
  animation: needleAppear 0.5s forwards ease-out 2s,
             needleMove 2s forwards ease-in-out 2.5s;
}
.gaugeNeedle::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #333;
  border-radius: 50%;
  bottom: -5px;
  left: -3.5px;
}
.gaugeValue {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 600;
  color: #9552D3;
  opacity: 0;
  animation: valueAppear 0.8s forwards ease-out 4s;
}
@keyframes gaugeAppear {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}
@keyframes tickAppear {
  0% { opacity: 0; height: 0; }
  100% { opacity: 1; height: 10px; }
}
@keyframes needleAppear {
  0% { opacity: 0; transform: rotate(-90deg); }
  100% { opacity: 1; transform: rotate(-70deg); }
}
@keyframes needleMove {
  0% { transform: rotate(-70deg); }
  40% { transform: rotate(60deg); }
  60% { transform: rotate(45deg); }
  75% { transform: rotate(55deg); }
  90% { transform: rotate(50deg); }
  100% { transform: rotate(53deg); }
}
@keyframes valueAppear {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/********************************************************
  9) BAR CHART
********************************************************/
.barChartContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.barGroup {
  position: absolute;
  bottom: 12%;
  left: 12%;
  width: 76%;
  height: 76%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.barWrapper {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}
.bar {
  width: 60%;
  background: linear-gradient(to top, rgba(149,82,211,0.7), rgba(188,115,237,0.7));
  border-radius: 3px 3px 0 0;
  transform: scaleY(0);
  transform-origin: bottom;
  animation: barGrow 1.2s forwards cubic-bezier(.17,.67,.83,.67);
}
.barLabel {
  position: absolute;
  bottom: -15px;
  font-size: 8px;
  color: #666;
  opacity: 0;
  animation: labelFadeIn 0.5s forwards ease-out;
}
.barValue {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 8px;
  color: #fff;
  font-weight: 600;
  top: 0;
  transform: translateY(-100%);
  opacity: 0;
  animation: labelFadeIn 0.5s forwards ease-out;
}
@keyframes barGrow {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}
@keyframes labelFadeIn {
  0% { opacity: 0; transform: translateY(5px); }
  100% { opacity: 1; transform: translateY(0); }
}

/********************************************************
  10) BUBBLE
********************************************************/
.bubbleContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.bubble {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  background: radial-gradient(circle at 30% 30%, rgba(188,115,237,0.9), rgba(149,82,211,0.7));
  box-shadow: 0 0 15px rgba(149,82,211,0.3);
  animation: bubbleGrow 1.5s forwards cubic-bezier(0.17, 0.67, 0.83, 0.67);
}
.bubble:nth-child(1) {
  width: 25%;
  height: 25%;
  left: 20%;
  top: 30%;
  animation-delay: 0.5s;
}
.bubble:nth-child(2) {
  width: 35%;
  height: 35%;
  right: 20%;
  top: 50%;
  animation-delay: 1.2s;
}
.bubble:nth-child(3) {
  width: 20%;
  height: 20%;
  left: 50%;
  top: 25%;
  animation-delay: 1.7s;
}
.bubbleLabel {
  position: absolute;
  font-size: 9px;
  font-weight: 600;
  color: #252525;
  text-align: center;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: bubbleLabelAppear 0.8s forwards ease-out;
}
.bubbleLabel:nth-child(4) {
  left: 20%;
  top: 30%;
  animation-delay: 1.0s;
}
.bubbleLabel:nth-child(5) {
  right: 20%;
  top: 50%;
  animation-delay: 1.7s;
}
.bubbleLabel:nth-child(6) {
  left: 50%;
  top: 25%;
  animation-delay: 2.2s;
}
.bubbleValue {
  position: absolute;
  font-size: 7px;
  color: #252525;
  text-align: center;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: bubbleLabelAppear 0.8s forwards ease-out;
}
.bubbleValue:nth-child(7)  {
  left: 20%;
  top: calc(30% + 10px);
  animation-delay: 1.1s;
}
.bubbleValue:nth-child(8)  {
  right: 20%;
  top: calc(50% + 15px);
  animation-delay: 1.8s;
}
.bubbleValue:nth-child(9)  {
  left: 50%;
  top: calc(25% + 8px);
  animation-delay: 2.3s;
}
@keyframes bubbleGrow {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes bubbleLabelAppear {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

/********************************************************
  11) LINE
********************************************************/
.lineChartContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.lineChart {
  position: absolute;
  bottom: 12%;
  left: 6%;
  width: 88%;
  height: 76%;
}
.lineBase {
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  background-color: rgba(0,0,0,0.1);
}
.linePath {
  position: absolute;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #9552D3;
  stroke-width: 2px;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: lineDraw 2s forwards ease-out 1s;
}
.linePath::before {
  content: '';
  position: absolute;
  border-bottom: 2px solid #9552D3;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0% 60%,
    10% 75%,
    20% 50%,
    30% 65%,
    40% 40%,
    50% 20%,
    60% 35%,
    70% 10%,
    80% 30%,
    90% 15%,
    100% 25%
  );
  opacity: 0;
  animation: lineAppear 0.1s forwards ease-out 1s;
}
.linePoint {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: white;
  border: 2px solid #9552D3;
  border-radius: 50%;
  transform: translate(-50%, 50%) scale(0);
  animation: linePointAppear 0.5s forwards ease-out;
}
.linePoint:nth-child(3)  { bottom: 60%; left: 0%;   animation-delay: 1.1s; }
.linePoint:nth-child(4)  { bottom: 75%; left: 10%;  animation-delay: 1.2s; }
.linePoint:nth-child(5)  { bottom: 50%; left: 20%;  animation-delay: 1.3s; }
.linePoint:nth-child(6)  { bottom: 65%; left: 30%;  animation-delay: 1.4s; }
.linePoint:nth-child(7)  { bottom: 40%; left: 40%;  animation-delay: 1.5s; }
.linePoint:nth-child(8)  { bottom: 20%; left: 50%;  animation-delay: 1.6s; }
.linePoint:nth-child(9)  { bottom: 35%; left: 60%;  animation-delay: 1.7s; }
.linePoint:nth-child(10) { bottom: 10%; left: 70%;  animation-delay: 1.8s; }
.linePoint:nth-child(11) { bottom: 30%; left: 80%;  animation-delay: 1.9s; }
.linePoint:nth-child(12) { bottom: 15%; left: 90%;  animation-delay: 2.0s; }
.linePoint:nth-child(13) { bottom: 25%; left: 100%; animation-delay: 2.1s; }
.lineFill {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0% 60%, 10% 75%, 20% 50%, 30% 65%, 40% 40%, 50% 20%, 
    60% 35%, 70% 10%, 80% 30%, 90% 15%, 100% 25%,
    100% 0%, 0% 0%
  );
  background: linear-gradient(to bottom, rgba(149,82,211,0.4) 0%, rgba(149,82,211,0.05) 100%);
  opacity: 0;
  animation: lineFillAppear 1.5s forwards ease-out 2.3s;
}
@keyframes lineDraw {
  0% { stroke-dashoffset: 500; }
  100% { stroke-dashoffset: 0; }
}
@keyframes lineAppear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes linePointAppear {
  0% { transform: translate(-50%, 50%) scale(0); }
  70% { transform: translate(-50%, 50%) scale(1.5); }
  100% { transform: translate(-50%, 50%) scale(1); }
}
@keyframes lineFillAppear {
  0% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
  100% { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
}

/********************************************************
  12) NETWORK
********************************************************/
.networkContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.networkNode {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #9552D3, #7941a0);
  transform: translate(-50%, -50%) scale(0);
  animation: nodeAppear 0.7s forwards cubic-bezier(.17,.67,.83,.67);
  z-index: 3;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.networkNode:nth-child(1) { left: 25%; top: 30%; animation-delay: 0.5s; }
.networkNode:nth-child(2) { left: 70%; top: 25%; animation-delay: 0.8s; }
.networkNode:nth-child(3) { left: 20%; top: 65%; animation-delay: 1.1s; }
.networkNode:nth-child(4) { left: 65%; top: 70%; animation-delay: 1.4s; }
.networkNode:nth-child(5) { left: 45%; top: 45%; animation-delay: 1.7s; }
.networkLink {
  position: absolute;
  height: 2px;
  background-color: rgba(149,82,211,0.4);
  transform-origin: left center;
  transform: scaleX(0);
  z-index: 2;
}
.networkLink:nth-child(6)  { animation: linkGrow 1s forwards ease-out 2.0s; }
.networkLink:nth-child(7)  { animation: linkGrow 1s forwards ease-out 2.2s; }
.networkLink:nth-child(8)  { animation: linkGrow 1s forwards ease-out 2.4s; }
.networkLink:nth-child(9)  { animation: linkGrow 1s forwards ease-out 2.6s; }
.networkLink:nth-child(10) { animation: linkGrow 1s forwards ease-out 2.8s; }
.networkLink:nth-child(11) { animation: linkGrow 1s forwards ease-out 3.0s; }
.networkLink:nth-child(12) { animation: linkGrow 1s forwards ease-out 3.2s; }
.networkLink:nth-child(13) { animation: linkGrow 1s forwards ease-out 3.4s; }
.nodeLabel {
  position: absolute;
  font-size: 9px;
  color: #333;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: labelAppear 0.5s forwards ease-out;
  z-index: 4;
  background-color: rgba(255,255,255,0.7);
  padding: 2px 4px;
  border-radius: 3px;
}
.nodeLabel:nth-child(14) { left: 25%; top: calc(30% - 25px); animation-delay: 0.7s; }
.nodeLabel:nth-child(15) { left: 70%; top: calc(25% - 25px); animation-delay: 1.0s; }
.nodeLabel:nth-child(16) { left: 20%; top: calc(65% - 25px); animation-delay: 1.3s; }
.nodeLabel:nth-child(17) { left: 65%; top: calc(70% - 25px); animation-delay: 1.6s; }
.nodeLabel:nth-child(18) { left: 45%; top: calc(45% - 25px); animation-delay: 1.9s; }
@keyframes nodeAppear {
  0% { transform: translate(-50%, -50%) scale(0); }
  60% { transform: translate(-50%, -50%) scale(1.2); }
  100% { transform: translate(-50%, -50%) scale(1); }
}
@keyframes linkGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/********************************************************
  ROTATING MESSAGES
********************************************************/
.message {
  font-size: 16px;
  color: #252525;
  text-align: center;
  transition: opacity 0.5s, transform 0.5s;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-top: 20px;
  padding: 0 20px;
}
.fadeIn {
  opacity: 1;
  transform: translateY(0);
}
.fadeOut {
  opacity: 0;
  transform: translateY(10px);
}
.message::after {
  content: '';
  display: inline-block;
  width: 0;
  animation: loadingDots 1.5s infinite;
}
@keyframes loadingDots {
  0% { content: ''; }
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
}

/********************************************************
  ANALYSIS LOG AREA
********************************************************/
.analysisLog {
  max-height: 150px;
  overflow-y: auto;
  margin-top: 20px;
  padding: 10px;
  border: none;
  background: transparent;
  font-size: 12px;
  line-height: 1.4;
  color: #666;
  border-radius: 4px;
}
.logLine { margin-bottom: 2px; }

/********************************************************
  RESPONSIVE ADJUSTMENTS
********************************************************/
@media (max-width: 1200px) {
  .visualization {
    grid-template-rows: repeat(4, 170px);
  }
  .windowTitle { font-size: 10px; }
}

@media (max-width: 992px) {
  .visualization {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 160px);
  }
  .module:nth-of-type(3) { grid-column: 1; grid-row: 2; }
  .module:nth-of-type(4) { grid-column: 2; grid-row: 2; }
  .module:nth-of-type(5) { grid-column: 1; grid-row: 3; }
  .module:nth-of-type(6) { grid-column: 2; grid-row: 3; }
  .module:nth-of-type(7) { grid-column: 1; grid-row: 4; }
  .module:nth-of-type(8) { grid-column: 2; grid-row: 4; }
  .module:nth-of-type(9) { grid-column: 1; grid-row: 5; }
  .module:nth-of-type(10) { grid-column: 2; grid-row: 5; }
  .module:nth-of-type(11) { grid-column: 1; grid-row: 6; }
  .module:nth-of-type(12) { grid-column: 2; grid-row: 6; }
  .windowTitle { font-size: 9px; }
}

@media (max-width: 768px) {
  .header {
    font-size: 18px;
    padding: 12px 15px;
  }
  .content { padding: 15px 10px; }
  .visualization {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 140px);
    gap: 12px;
  }
  .module:nth-of-type(n) { grid-column: 1; }
  .module:nth-of-type(1)  { grid-row: 1; }
  .module:nth-of-type(2)  { grid-row: 2; }
  .module:nth-of-type(3)  { grid-row: 3; }
  .module:nth-of-type(4)  { grid-row: 4; }
  .module:nth-of-type(5)  { grid-row: 5; }
  .module:nth-of-type(6)  { grid-row: 6; }
  .module:nth-of-type(7)  { grid-row: 7; }
  .module:nth-of-type(8)  { grid-row: 8; }
  .module:nth-of-type(9)  { grid-row: 9; }
  .module:nth-of-type(10) { grid-row: 10; }
  .module:nth-of-type(11) { grid-row: 11; }
  .module:nth-of-type(12) { grid-row: 12; }
  .message { font-size: 14px; }
}

@media (max-width: 480px) {
  .header {
    font-size: 16px;
    padding: 10px;
  }
  .message {
    font-size: 12px;
    margin-top: 15px;
  }
  .visualization {
    grid-template-rows: repeat(12, 130px);
    gap: 10px;
  }
  .windowTitle { font-size: 8px; }
  .macWindowBar { height: 22px; }
  .trafficLight {
    width: 10px;
    height: 10px;
  }
}

—

Please take this first two sets of code - the old loading screen, and add it to the latter 2 sets of codes so that the old loader and messages popping up is above the zoom container with tasteful spacing, without changing or losing anything at all from the current version:   /* Base container styles */
.prognostic-ai-demo-results-container {
    font-family: 'Montserrat', sans-serif;
    background-color: #F0F4F8;
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 15px;
    overflow: hidden;
}

.prognostic-ai-demo-results-container * {
    box-sizing: border-box;
}

/* Header styles */
.pai-dr-header {
    background-color: #252525;
    color: white;
    padding: 20px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
}

/* Subtle header animation */
.pai-dr-header::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: header-scan 8s linear infinite;
}

@keyframes header-scan {
    0% { left: -100%; }
    100% { left: 200%; }
}

/* Content area */
.pai-dr-content {
    background-color: white;
    padding: 30px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 15px 15px;
    position: relative;
    overflow: hidden;
}

/* Futuristic visualization container */
.pai-dr-visualization {
    position: relative;
    width: 180px;
    height: 180px;
    margin-bottom: 40px;
}

/* Core central circle */
.pai-dr-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: #252525;
    border-radius: 50%;
    z-index: 5;
    box-shadow: 0 0 10px rgba(37, 37, 37, 0.3);
}

/* Inner rotating ring */
.pai-dr-ring-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 2px solid rgba(37, 37, 37, 0.1);
    border-top: 2px solid #252525;
    border-radius: 50%;
    animation: pai-dr-spin-inner 3s linear infinite;
}

/* Middle rotating ring */
.pai-dr-ring-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border: 1px solid rgba(37, 37, 37, 0.05);
    border-left: 1px solid #252525;
    border-radius: 50%;
    animation: pai-dr-spin-middle 7s linear infinite;
}

/* Outer rotating ring */
.pai-dr-ring-outer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    border: 1px dashed rgba(37, 37, 37, 0.05);
    border-right: 1px solid rgba(37, 37, 37, 0.6);
    border-radius: 50%;
    animation: pai-dr-spin-outer 15s linear infinite;
}

/* Data points that appear and disappear */
.pai-dr-data-points {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
}

.pai-dr-data-point {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #252525;
    border-radius: 50%;
    opacity: 0;
}

/* Data point animations - positioned at various points around the circle */
.pai-dr-data-point:nth-child(1) {
    top: 30%;
    left: 10%;
    animation: data-point-pulse 5s ease-in-out infinite;
    animation-delay: 0.2s;
}

.pai-dr-data-point:nth-child(2) {
    top: 70%;
    left: 20%;
    animation: data-point-pulse 7s ease-in-out infinite;
    animation-delay: 1.5s;
}

.pai-dr-data-point:nth-child(3) {
    top: 20%;
    left: 80%;
    animation: data-point-pulse 6s ease-in-out infinite;
    animation-delay: 0.7s;
}

.pai-dr-data-point:nth-child(4) {
    top: 60%;
    left: 85%;
    animation: data-point-pulse 8s ease-in-out infinite;
    animation-delay: 2.1s;
}

.pai-dr-data-point:nth-child(5) {
    top: 40%;
    left: 50%;
    animation: data-point-pulse 4s ease-in-out infinite;
    animation-delay: 1.2s;
}

.pai-dr-data-point:nth-child(6) {
    top: 80%;
    left: 50%;
    animation: data-point-pulse 6s ease-in-out infinite;
    animation-delay: 3.5s;
}

/* Data connection lines */
.pai-dr-data-connection {
    position: absolute;
    background-color: rgba(37, 37, 37, 0.1);
    transform-origin: 0 0;
    z-index: 3;
    opacity: 0;
}

.pai-dr-data-connection:nth-child(1) {
    top: 32%;
    left: 12%;
    width: 50px;
    height: 1px;
    transform: rotate(30deg);
    animation: connection-appear 4s ease-in-out infinite;
    animation-delay: 0.3s;
}

.pai-dr-data-connection:nth-child(2) {
    top: 72%;
    left: 22%;
    width: 70px;
    height: 1px;
    transform: rotate(-15deg);
    animation: connection-appear 6s ease-in-out infinite;
    animation-delay: 1.7s;
}

.pai-dr-data-connection:nth-child(3) {
    top: 22%;
    left: 78%;
    width: 60px;
    height: 1px;
    transform: rotate(150deg);
    animation: connection-appear 5s ease-in-out infinite;
    animation-delay: 0.9s;
}

.pai-dr-data-connection:nth-child(4) {
    top: 62%;
    left: 83%;
    width: 55px;
    height: 1px;
    transform: rotate(200deg);
    animation: connection-appear 7s ease-in-out infinite;
    animation-delay: 2.3s;
}

/* Glowing scan effect */
.pai-dr-scan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, transparent 30%, rgba(37, 37, 37, 0.03) 60%, transparent 70%);
    border-radius: 50%;
    z-index: 2;
    animation: scan-pulse 4s ease-in-out infinite;
}

/* Background grid for futuristic effect */
.pai-dr-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 20px 20px;
    background-image: radial-gradient(circle, rgba(37, 37, 37, 0.1) 1px, transparent 1px);
    z-index: 1;
    opacity: 0.3;
}

/* Message display */
.pai-dr-message {
    font-size: 20px;
    color: #333;
    text-align: center;
    opacity: 1;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    font-weight: 500;
    letter-spacing: 0.3px;
    position: relative;
    z-index: 6;
}

.fade-out {
    opacity: 0;
    transform: translateY(20px);
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}

/* Success message styling */
.pai-dr-message.success {
    color: #252525;
    font-weight: 600;
}

/* Button styling */
.pai-dr-button {
    display: inline-block;
    background-color: #252525;
    color: white;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pai-dr-button:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Animation keyframes */
@keyframes pai-dr-spin-inner {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes pai-dr-spin-middle {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(-360deg); }
}

@keyframes pai-dr-spin-outer {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes data-point-pulse {
    0%, 100% { opacity: 0; transform: scale(0); }
    20% { opacity: 0.2; transform: scale(1); }
    40% { opacity: 0.8; transform: scale(2); }
    60% { opacity: 0.4; transform: scale(1.5); }
    80% { opacity: 0.1; transform: scale(1); }
}

@keyframes connection-appear {
    0%, 100% { opacity: 0; }
    30%, 70% { opacity: 0.7; }
}

@keyframes scan-pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
}

/* Flying data particles effect */
.pai-dr-particles-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
}

.pai-dr-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: rgba(37, 37, 37, 0.2);
    border-radius: 50%;
}

.pai-dr-particle:nth-child(1) {
    top: 20%;
    left: -5%;
    animation: particle-move 7s linear infinite;
}

.pai-dr-particle:nth-child(2) {
    top: 70%;
    left: -5%;
    animation: particle-move 8s linear infinite 1s;
}

.pai-dr-particle:nth-child(3) {
    top: 40%;
    left: -5%;
    animation: particle-move 6s linear infinite 2s;
}

.pai-dr-particle:nth-child(4) {
    top: 30%;
    left: -5%;
    animation: particle-move 9s linear infinite 3s;
}

.pai-dr-particle:nth-child(5) {
    top: 60%;
    left: -5%;
    animation: particle-move 7s linear infinite 4s;
}

.pai-dr-particle:nth-child(6) {
    top: 80%;
    left: -5%;
    animation: particle-move 10s linear infinite 0.5s;
}

.pai-dr-particle:nth-child(7) {
    top: 50%;
    left: -5%;
    animation: particle-move 8s linear infinite 2.5s;
}

.pai-dr-particle:nth-child(8) {
    top: 10%;
    left: -5%;
    animation: particle-move 6s linear infinite 1.5s;
}

@keyframes particle-move {
    0% { 
        transform: translateX(0) translateY(0); 
        opacity: 0;
    }
    10% {
        opacity: 0.4;
    }
    90% {
        opacity: 0.4;
    }
    100% { 
        transform: translateX(105vw) translateY(20px); 
        opacity: 0;
    }
}

/* Media queries for responsive design */
@media (max-width: 600px) {
    .pai-dr-header {
        font-size: 20px;
        padding: 15px;
    }
    
    .pai-dr-content {
        padding: 20px;
        min-height: 300px;
    }
    
    .pai-dr-visualization {
        width: 150px;
        height: 150px;
    }
    
    .pai-dr-ring-outer {
        width: 130px;
        height: 130px;
    }
    
    .pai-dr-ring-middle {
        width: 100px;
        height: 100px;
    }
    
    .pai-dr-ring-inner {
        width: 70px;
        height: 70px;
    }
    
    .pai-dr-message {
        font-size: 18px;
    }
}  — 
import React, { useEffect, useState } from 'react';
import styles from './LoadingCircle.module.css';

const LoadingIndicator: React.FC = () => {
    const loadingMessages = [
        "Thinking...",
        "Looking at your site...",
        "Finding immediate opportunities...",
        "Tailoring value...",
        "Identifying your target audience...",
        "Split-testing potential setbacks...",
        "Analyzing test results...",
        "Refining for immediate impact...",
        "Running new A/B tests based on synthesized results...",
        "Crafting your blueprint for maximum success...",
        "Refining...",
        "Success! Processing...",
        "Success! Finalizing...",
        "Success! Integrating...",
        "Success! Validating...",
        "Success! Completing..."
    ];
    
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true); // True for fade-in, false for fade-out
    
    // Check if the message includes "Success!" to apply special styling
    const isSuccess = loadingMessages[messageIndex].includes("Success!");
    
    useEffect(() => {
        const updateMessage = () => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                // After fade-out completes, update the message and fade-in
                setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
                setFade(true); // Trigger fade-in
            }, 500); // Match the duration of the fade-out
        };
        
        // Set an interval to change the message every 5 seconds
        const intervalId = setInterval(updateMessage, 5000);
        
        // Clean up on unmount
        return () => clearInterval(intervalId);
    }, [loadingMessages.length]);
    
    return (
        <div className={styles['prognostic-ai-demo-results-container']}>
            <div className={styles['pai-dr-header']}>
                Clients.ai Quantum Analysis In Process
            </div>
            <div className={styles['pai-dr-content']}>
                {/* Futuristic visualization replaces simple spinner */}
                <div className={styles['pai-dr-visualization']}>
                    {/* Core center circle */}
                    <div className={styles['pai-dr-core']}></div>
                    
                    {/* Rotating rings */}
                    <div className={styles['pai-dr-ring-inner']}></div>
                    <div className={styles['pai-dr-ring-middle']}></div>
                    <div className={styles['pai-dr-ring-outer']}></div>
                    
                    {/* Data points that appear and disappear */}
                    <div className={styles['pai-dr-data-points']}>
                        <div className={styles['pai-dr-data-point']}></div>
                        <div className={styles['pai-dr-data-point']}></div>
                        <div className={styles['pai-dr-data-point']}></div>
                        <div className={styles['pai-dr-data-point']}></div>
                        <div className={styles['pai-dr-data-point']}></div>
                        <div className={styles['pai-dr-data-point']}></div>
                    </div>
                    
                    {/* Connection lines between data points */}
                    <div className={styles['pai-dr-data-connection']}></div>
                    <div className={styles['pai-dr-data-connection']}></div>
                    <div className={styles['pai-dr-data-connection']}></div>
                    <div className={styles['pai-dr-data-connection']}></div>
                    
                    {/* Scan effect */}
                    <div className={styles['pai-dr-scan']}></div>
                    
                    {/* Background grid */}
                    <div className={styles['pai-dr-grid']}></div>
                </div>
                
                {/* Flying particles in background */}
                <div className={styles['pai-dr-particles-container']}>
                    <div className={styles['pai-dr-particle']}></div>
                    <div className={styles['pai-dr-particle']}></div>
                    <div className={styles['pai-dr-particle']}></div>
                    <div className={styles['pai-dr-particle']}></div>
                    <div className={styles['pai-dr-particle']}></div>
                    <div className={styles['pai-dr-particle']}></div>
                    <div className={styles['pai-dr-particle']}></div>
                    <div className={styles['pai-dr-particle']}></div>
                </div>
                
                {/* Message with fade transition */}
                <div 
                    className={${styles['pai-dr-message']} ${fade ? styles['fade-in'] : styles['fade-out']} ${isSuccess ? styles['success'] : ''}}
                >
                    {loadingMessages[messageIndex]}
                </div>
            </div>
        </div>
    );
};

export default LoadingIndicator;


—





Now here is the current version, please give me these two sets of files with nothing at all lost and the only change being the old loader circle being above the container in a way that is taste3full placed and optimal in every way regardless of the device: 


/******************************************************
  ENHANCED DATA ANALYSIS MODULE STYLES (COMBINED FINAL)
******************************************************/

/********************************************************
  BASE CONTAINER & LAYOUT
********************************************************/
.container {
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #F8F8F8;
  position: relative;
  width: 100% !important;
  max-width: 1200px !important;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #ECECEC;
  margin-bottom: 40px;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom right, rgba(149,82,211,0.08) 0%, transparent 70%);
  z-index: 0;
}

.header {
  padding: 16px 20px;
  color: #252525;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.3;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #ECECEC;
}

/********************************************************
  PROGRESS BAR
********************************************************/
.progressContainer {
  width: 100%;
  height: 4px;
  background-color: #E8EAF0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.progressBar {
  height: 100%;
  background: linear-gradient(90deg, #9552D3, #BC73ED);
  transition: width 0.3s ease-out;
  position: relative;
}

.progressGlow {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30px;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0),
    rgba(255,255,255,0.6),
    rgba(255,255,255,0)
  );
  animation: glowLoop 2s ease-out infinite;
}
@keyframes glowLoop {
  0%   { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

.progressComplete {
  animation: blinkBar 1s infinite alternate ease-in-out;
}
@keyframes blinkBar {
  0%   { opacity: 1; }
  100% { opacity: 0.85; }
}

/********************************************************
  CONTENT AREA
********************************************************/
.content {
  background-color: white;
  padding: 30px 15px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.visualization {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 180px);
  gap: 15px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
}

/********************************************************
  MODULE LAYOUT
********************************************************/
.module {
  position: relative;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  overflow: hidden;
  opacity: 0;
  z-index: 2;
  transform-origin: center center;
}

.module:nth-of-type(1) { grid-column: 1; grid-row: 1; }
.module:nth-of-type(2) { grid-column: 2; grid-row: 1; }
.module:nth-of-type(3) { grid-column: 3; grid-row: 1; }
.module:nth-of-type(4) { grid-column: 1; grid-row: 2; }
.module:nth-of-type(5) { grid-column: 2; grid-row: 2; }
.module:nth-of-type(6) { grid-column: 3; grid-row: 2; }
.module:nth-of-type(7) { grid-column: 1; grid-row: 3; }
.module:nth-of-type(8) { grid-column: 2; grid-row: 3; }
.module:nth-of-type(9) { grid-column: 3; grid-row: 3; }
.module:nth-of-type(10) { grid-column: 1; grid-row: 4; }
.module:nth-of-type(11) { grid-column: 2; grid-row: 4; }
.module:nth-of-type(12) { grid-column: 3; grid-row: 4; }

/********************************************************
  MODULE FLY-IN ANIMATIONS
********************************************************/
@keyframes flyInWithBounce {
  0%   { transform: translateY(-300px) scale(0.9); opacity: 0; }
  70%  { transform: translateY(15px) scale(1.02); opacity: 0.9; }
  85%  { transform: translateY(-8px) scale(0.98); opacity: 0.95; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes flyInFromSide {
  0%   { transform: translateX(-300px) scale(0.9); opacity: 0; }
  70%  { transform: translateX(15px) scale(1.02); opacity: 0.9; }
  85%  { transform: translateX(-8px) scale(0.98); opacity: 0.95; }
  100% { transform: translateX(0) scale(1); opacity: 1; }
}
@keyframes zoomInWithFade {
  0%   { transform: scale(0.7); opacity: 0; }
  60%  { transform: scale(1.05); opacity: 0.8; }
  80%  { transform: scale(0.97); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes slideUpWithShadow {
  0%   { transform: translateY(100px); opacity: 0; }
  70%  { transform: translateY(-10px); opacity: 0.8; box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
  85%  { transform: translateY(5px); opacity: 0.9; box-shadow: 0 5px 15px rgba(0,0,0,0.08); }
  100% { transform: translateY(0); opacity: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
}

.animation1 { animation: flyInWithBounce 0.7s forwards ease-out; }
.animation2 { animation: flyInFromSide 0.8s forwards ease-out; }
.animation3 { animation: zoomInWithFade 0.9s forwards ease-out; }
.animation4 { animation: slideUpWithShadow 0.75s forwards ease-out; }

.delay1 { animation-delay: 0.1s; }
.delay2 { animation-delay: 0.4s; }
.delay3 { animation-delay: 0.7s; }
.delay4 { animation-delay: 0.25s; }
.delay5 { animation-delay: 0.55s; }
.delay6 { animation-delay: 0.9s; }
.delay7 { animation-delay: 0.3s; }
.delay8 { animation-delay: 0.65s; }
.delay9 { animation-delay: 0.85s; }
.delay10 { animation-delay: 0.15s; }
.delay11 { animation-delay: 0.5s; }
.delay12 { animation-delay: 0.75s; }

/********************************************************
  VM LOADING OVERLAY - MORE ADVANCED LOOK
********************************************************/
.vmLoadingOverlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.vmBootLines {
  color: #8DE8AD;
  font-family: "Source Code Pro", monospace;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: flickerScreen 2s infinite;
}

.vmDotFlicker {
  margin: 6px 0;
  animation: dotFlicker 1.8s infinite;
}

@keyframes dotFlicker {
  0%   { opacity: 1; }
  50%  { opacity: 0.2; }
  100% { opacity: 1; }
}

@keyframes flickerScreen {
  0% { opacity: 1; }
  80% { opacity: 0.98; }
  95% { opacity: 0.9; }
  100% { opacity: 1; }
}

/********************************************************
  VM-LIKE WINDOW BAR
********************************************************/
.macWindowBar {
  height: 26px;
  background: linear-gradient(to bottom, #f6f6f6, #e6e6e6);
  display: flex;
  align-items: center;
  padding-left: 8px;
  border-bottom: 1px solid #d2d2d2;
}

.trafficLight {
  width: 12px; 
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  position: relative;
}
.trafficLight::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%);
}

.trafficLight[data-color="red"]    { background-color: #ff5f56; box-shadow: 0 0 1px rgba(0,0,0,0.2);}
.trafficLight[data-color="yellow"] { background-color: #ffbd2e; box-shadow: 0 0 1px rgba(0,0,0,0.2);}
.trafficLight[data-color="green"]  { background-color: #27c93f; box-shadow: 0 0 1px rgba(0,0,0,0.2);}

.windowTitle {
  font-size: 11px;
  font-weight: 600;
  margin-left: 10px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 0 rgba(255,255,255,0.7);
}

.windowStatus {
  margin-left: auto;
  margin-right: 8px;
  font-size: 10px;
  color: #666;
  background-color: rgba(0,0,0,0.05);
  padding: 2px 6px;
  border-radius: 3px;
  letter-spacing: 0.5px;
  animation: statusBlink 3s infinite alternate;
}

@keyframes statusBlink {
  0%, 80% { color: #666; }
  90%, 100% { color: #9552D3; }
}

.moduleBody {
  width: 100%;
  height: calc(100% - 26px);
  position: relative;
  padding: 6px;
  overflow: hidden;
  background-color: #fbfbfb;
}

/********************************************************
  REALISTIC DATA GRID - BASE FOR ALL CHARTS
********************************************************/
.chartGrid {
  position: absolute;
  top: 6%;
  left: 6%;
  right: 6%;
  bottom: 12%;
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}

.chartAxisX, .chartAxisY {
  position: absolute;
  background-color: rgba(0,0,0,0.2);
}

.chartAxisX {
  bottom: 12%;
  left: 6%;
  width: 88%;
  height: 1px;
}
.chartAxisY {
  bottom: 12%;
  left: 6%;
  width: 1px;
  height: 82%;
}

.chartAxisX::after, .chartAxisY::after {
  content: '';
  position: absolute;
  border-style: solid;
}

.chartAxisX::after {
  right: -6px;
  top: -3px;
  border-width: 3px 0 3px 6px;
  border-color: transparent transparent transparent rgba(0,0,0,0.2);
}
.chartAxisY::after {
  left: -3px; 
  top: -6px;
  border-width: 0 3px 6px 3px;
  border-color: transparent transparent rgba(0,0,0,0.2) transparent;
}

/********************************************************
  1) FUNNEL
********************************************************/
.funnelContainer {
  position: relative;
  width: 100%;
  height: 100%;
}

.funnelMetric {
  position: absolute;
  height: 22px;
  width: calc(100% - 30px);
  left: 15px;
  background: rgba(149,82,211,0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 10px;
  color: #333;
  animation: metricPopulate 1s forwards;
  transform-origin: left;
  opacity: 0;
}

.funnelMetric .label { flex: 1; text-align: left; font-weight: 500; }
.funnelMetric .value { font-weight: 600; color: #9552D3; }

.funnelMetric .bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(149,82,211,0.2), rgba(188,115,237,0.2));
  border-radius: 4px;
  z-index: -1;
  animation: barGrow 1.5s forwards ease-out;
  transform-origin: left;
  transform: scaleX(0);
}

@keyframes metricPopulate {
  0% { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes barGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/********************************************************
  2) RADAR
********************************************************/
.radarContainer {
  position: relative;
  width: 100%; 
  height: 100%;
}

.radarChart {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
}

.radarAxis {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 45%;
  height: 1px;
  background-color: rgba(0,0,0,0.1);
  transform-origin: left center;
}
.radarAxis:nth-child(1) { transform: rotate(0deg); }
.radarAxis:nth-child(2) { transform: rotate(60deg); }
.radarAxis:nth-child(3) { transform: rotate(120deg); }
.radarAxis:nth-child(4) { transform: rotate(180deg); }
.radarAxis:nth-child(5) { transform: rotate(240deg); }
.radarAxis:nth-child(6) { transform: rotate(300deg); }

.radarCircle {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 1px dashed rgba(0,0,0,0.1);
  transform: translate(-50%, -50%);
}
.radarCircle:nth-child(7)  { width: 90%; height: 90%; }
.radarCircle:nth-child(8)  { width: 70%; height: 70%; }
.radarCircle:nth-child(9)  { width: 50%; height: 50%; }
.radarCircle:nth-child(10) { width: 30%; height: 30%; }

.radarValue {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(149,82,211,0.7);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  opacity: 0;
  box-shadow: 0 0 5px rgba(149,82,211,0.5);
  animation: radarValueAppear 0.5s forwards;
}
.radarValue:nth-child(11) { transform: translate(calc(-50% + 40%), calc(-50% - 5%));  animation-delay: 1.0s; }
.radarValue:nth-child(12) { transform: translate(calc(-50% + 15%), calc(-50% - 35%)); animation-delay: 1.3s; }
.radarValue:nth-child(13) { transform: translate(calc(-50% - 20%), calc(-50% - 30%)); animation-delay: 1.6s; }
.radarValue:nth-child(14) { transform: translate(calc(-50% - 40%), calc(-50% + 0%));  animation-delay: 1.9s; }
.radarValue:nth-child(15) { transform: translate(calc(-50% - 10%), calc(-50% + 30%)); animation-delay: 2.2s; }
.radarValue:nth-child(16) { transform: translate(calc(-50% + 25%), calc(-50% + 20%)); animation-delay: 2.5s; }

.radarArea {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  clip-path: polygon(
    calc(50% + 40%) calc(50% - 5%), 
    calc(50% + 15%) calc(50% - 35%), 
    calc(50% - 20%) calc(50% - 30%), 
    calc(50% - 40%) calc(50% + 0%), 
    calc(50% - 10%) calc(50% + 30%), 
    calc(50% + 25%) calc(50% + 20%)
  );
  background-color: rgba(149,82,211,0.2);
  opacity: 0;
  animation: radarAreaAppear 1s forwards ease-out 2.8s;
}

@keyframes radarValueAppear {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
@keyframes radarAreaAppear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/********************************************************
  3) AREA CHART
********************************************************/
.areaChartContainer { position: relative; width: 100%; height: 100%; }
.areaPath {
  position: absolute;
  bottom: 12%;
  left: 6%;
  width: 88%;
  height: 82%;
  overflow: hidden;
}

.area {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(149,82,211,0.2) 0%, rgba(149,82,211,0.05) 100%);
  clip-path: polygon(
    0% 100%,
    0% 80%,
    10% 75%,
    20% 65%,
    30% 70%,
    40% 60%,
    50% 40%,
    60% 45%,
    70% 35%,
    80% 25%,
    90% 30%,
    100% 20%,
    100% 100%
  );
  transform: scaleX(0);
  transform-origin: left;
  animation: areaGrow 2s forwards ease-out 1s;
}

.areaLine {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  overflow: visible;
}
.areaLine::before {
  content: '';
  position: absolute;
  border-top: 2px solid rgba(149,82,211,0.8);
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0% 80%,
    10% 75%,
    20% 65%,
    30% 70%,
    40% 60%,
    50% 40%,
    60% 45%,
    70% 35%,
    80% 25%,
    90% 30%,
    100% 20%
  );
  transform: scaleX(0);
  transform-origin: left;
  animation: areaGrow 2.4s forwards ease-out 1.2s;
}

.dataPoint {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #9552D3;
  transform: translate(-50%, 50%) scale(0);
  box-shadow: 0 0 0 2px rgba(255,255,255,0.7);
  animation: pointAppear 0.4s forwards ease-out;
}
.dataPoint:nth-child(3)  { bottom: 80%; left: 0%;   animation-delay: 1.4s; }
.dataPoint:nth-child(4)  { bottom: 75%; left: 10%;  animation-delay: 1.5s; }
.dataPoint:nth-child(5)  { bottom: 65%; left: 20%;  animation-delay: 1.6s; }
.dataPoint:nth-child(6)  { bottom: 70%; left: 30%;  animation-delay: 1.7s; }
.dataPoint:nth-child(7)  { bottom: 60%; left: 40%;  animation-delay: 1.8s; }
.dataPoint:nth-child(8)  { bottom: 40%; left: 50%;  animation-delay: 1.9s; }
.dataPoint:nth-child(9)  { bottom: 45%; left: 60%;  animation-delay: 2.0s; }
.dataPoint:nth-child(10) { bottom: 35%; left: 70%;  animation-delay: 2.1s; }
.dataPoint:nth-child(11) { bottom: 25%; left: 80%;  animation-delay: 2.2s; }
.dataPoint:nth-child(12) { bottom: 30%; left: 90%;  animation-delay: 2.3s; }
.dataPoint:nth-child(13) { bottom: 20%; left: 100%; animation-delay: 2.4s; }

@keyframes areaGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
@keyframes pointAppear {
  0% { transform: translate(-50%, 50%) scale(0); }
  70% { transform: translate(-50%, 50%) scale(1.5); }
  100% { transform: translate(-50%, 50%) scale(1); }
}

/********************************************************
  4) CHORD
********************************************************/
.chordContainer { position: relative; width: 100%; height: 100%; }
.chordCircle {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.1);
}
.chordArc {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  overflow: visible;
}
.chordArc::before,
.chordArc::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #9552D3;
  opacity: 0;
  animation: arcPointAppear 0.7s forwards ease-out;
  transform: translate(-50%, -50%);
}

@keyframes arcPointAppear {
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

.chordSegment {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 35%;
  background-color: rgba(149,82,211,0.8);
  transform-origin: bottom center;
  transform: rotate(0deg) scaleY(0);
  animation: segmentGrow 1s forwards ease-out;
  opacity: 0.8;
}

.chord {
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.chord2 {
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

@keyframes segmentGrow {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}

/********************************************************
  5) SCATTER
********************************************************/
.scatterContainer { position: relative; width: 100%; height: 100%; }
.scatterPoint {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(149,82,211,0.7);
  transform: scale(0);
  opacity: 0;
  animation: scatterAppear 0.8s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 5px rgba(149,82,211,0.3);
}
.scatterPoint[data-value="high"]   { width: 12px; height: 12px; }
.scatterPoint[data-value="medium"] { width: 9px;  height: 9px;  }
.scatterPoint[data-value="low"]    { width: 6px;  height: 6px;  }

.scatterPoint:nth-child(1) { left: 18%; top: 25%; animation-delay: 0.7s; }
.scatterPoint:nth-child(2) { left: 32%; top: 45%; animation-delay: 0.9s; }
.scatterPoint:nth-child(3) { left: 45%; top: 20%; animation-delay: 1.1s; }
.scatterPoint:nth-child(4) { left: 60%; top: 60%; animation-delay: 1.3s; }
.scatterPoint:nth-child(5) { left: 75%; top: 35%; animation-delay: 1.5s; }
.scatterPoint:nth-child(6) { left: 25%; top: 70%; animation-delay: 1.7s; }
.scatterPoint:nth-child(7) { left: 48%; top: 75%; animation-delay: 1.9s; }
.scatterPoint:nth-child(8) { left: 70%; top: 78%; animation-delay: 2.1s; }
.scatterPoint:nth-child(9) { left: 85%; top: 55%; animation-delay: 2.3s; }

.trendLine {
  position: absolute;
  width: 75%;
  height: 2px;
  bottom: 30%;
  left: 15%;
  background-color: rgba(188,115,237,0.4);
  transform: scaleX(0) rotate(25deg);
  transform-origin: left;
  animation: trendLineGrow 1.5s forwards ease-out 2.5s;
}

@keyframes scatterAppear {
  0%   { transform: scale(0); opacity: 0; }
  50%  { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes trendLineGrow {
  0% { transform: scaleX(0) rotate(25deg); }
  100% { transform: scaleX(1) rotate(25deg); }
}

/********************************************************
  6) HEATMAP
********************************************************/
.heatmapContainer { position: relative; width: 100%; height: 100%; }
.heatmapGrid {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 3px;
}

.heatCell {
  background-color: rgba(149,82,211,0.05);
  border-radius: 2px;
  transform: scale(0);
  animation: heatCellAppear 0.4s forwards ease-out;
}
.heatCell.low       { background-color: rgba(149,82,211,0.1); }
.heatCell.medium    { background-color: rgba(149,82,211,0.3); }
.heatCell.high      { background-color: rgba(149,82,211,0.6); }
.heatCell.very-high { background-color: rgba(149,82,211,0.9); }

.xLabels, .yLabels {
  position: absolute;
  display: flex;
  justify-content: space-between;
}
.xLabels {
  bottom: 8%;
  left: 15%;
  width: 70%;
}
.yLabels {
  top: 15%;
  flex-direction: column;
  height: 70%;
}

.xLabels span, .yLabels span {
  font-size: 8px;
  color: #666;
}

@keyframes heatCellAppear {
  0%   { transform: scale(0); }
  70%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/********************************************************
  7) DONUT
********************************************************/
.donutContainer {
  position: relative;
  width: 70%;
  height: 70%;
  margin: 5% auto;
}

.donutRing {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f2f2f2;
  overflow: hidden;
  transform: rotate(-90deg);
}
.donutSegment {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  opacity: 0;
  animation: segmentAppear 1s forwards ease-out;
}
.segment1 {
  background: conic-gradient(#9552D3 0% 42%, transparent 42% 100%);
  animation-delay: 0.8s;
}
.segment2 {
  background: conic-gradient(transparent 0% 42%, #BC73ED 42% 68%, transparent 68% 100%);
  animation-delay: 1.4s;
}
.segment3 {
  background: conic-gradient(transparent 0% 68%, rgba(105, 73, 140, 0.7) 68% 100%);
  animation-delay: 2.0s;
}

.donutHole {
  position: absolute;
  width: 60%;
  height: 60%;
  background-color: white;
  border-radius: 50%;
  top: 20%;
  left: 20%;
  z-index: 3;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
}

.donutLabel {
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  top: 20%;
  left: 20%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  animation: labelAppear 0.8s forwards ease-out 2.6s;
}

.donutLabel .value {
  font-size: 16px;
  font-weight: 600;
  color: #9552D3;
}
.donutLabel .text {
  font-size: 8px;
  color: #666;
  margin-top: 2px;
}

.legendItem {
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 8px;
  color: #333;
  opacity: 0;
  animation: legendAppear 0.5s forwards ease-out;
}
.legendItem span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  margin-right: 4px;
}
@keyframes segmentAppear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes labelAppear {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes legendAppear {
  0% { transform: translateX(-10px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

/********************************************************
  8) GAUGE
********************************************************/
.gaugeContainer {
  position: relative;
  width: 80%;
  height: 60%;
  margin: 15% auto 0 auto;
  overflow: visible;
}
.gaugeBackground {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f6f6f6, #ececec);
  border-radius: 100px 100px 0 0;
  overflow: hidden;
}
.gaugeMeter {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 10%;
  left: 5%;
  border-radius: 90px 90px 0 0;
  background: conic-gradient(
    #ff6b6b 0% 33%, 
    #ffc107 33% 67%, 
    #28a745 67% 100%
  );
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform-origin: center bottom;
  transform: scale(0);
  animation: gaugeAppear 1s forwards ease-out 1s;
}
.gaugeCover {
  position: absolute;
  width: 70%;
  height: 70%;
  bottom: 0%;
  left: 15%;
  border-radius: 70px 70px 0 0;
  background-color: white;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.gaugeTicks {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.gaugeTick {
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: rgba(0,0,0,0.2);
  transform-origin: center bottom;
  bottom: 0;
  left: calc(50% - 1px);
  opacity: 0;
  animation: tickAppear 0.3s forwards ease-out;
}
.gaugeTick:nth-child(1)  { transform: rotate(-90deg); animation-delay: 0.3s; }
.gaugeTick:nth-child(2)  { transform: rotate(-75deg); animation-delay: 0.4s; }
.gaugeTick:nth-child(3)  { transform: rotate(-60deg); animation-delay: 0.5s; }
.gaugeTick:nth-child(4)  { transform: rotate(-45deg); animation-delay: 0.6s; }
.gaugeTick:nth-child(5)  { transform: rotate(-30deg); animation-delay: 0.7s; }
.gaugeTick:nth-child(6)  { transform: rotate(-15deg); animation-delay: 0.8s; }
.gaugeTick:nth-child(7)  { transform: rotate(0deg);   animation-delay: 0.9s; }
.gaugeTick:nth-child(8)  { transform: rotate(15deg);  animation-delay: 1.0s; }
.gaugeTick:nth-child(9)  { transform: rotate(30deg);  animation-delay: 1.1s; }
.gaugeTick:nth-child(10) { transform: rotate(45deg);  animation-delay: 1.2s; }
.gaugeTick:nth-child(11) { transform: rotate(60deg);  animation-delay: 1.3s; }
.gaugeTick:nth-child(12) { transform: rotate(75deg);  animation-delay: 1.4s; }
.gaugeTick:nth-child(13) { transform: rotate(90deg);  animation-delay: 1.5s; }

.gaugeNeedle {
  position: absolute;
  width: 3px;
  height: 80%;
  background-color: #333;
  bottom: 0;
  left: calc(50% - 1.5px);
  transform-origin: bottom center;
  transform: rotate(-70deg);
  z-index: 10;
  opacity: 0;
  border-radius: 3px 3px 0 0;
  animation: needleAppear 0.5s forwards ease-out 2s,
             needleMove 2s forwards ease-in-out 2.5s;
}
.gaugeNeedle::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #333;
  border-radius: 50%;
  bottom: -5px;
  left: -3.5px;
}
.gaugeValue {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 600;
  color: #9552D3;
  opacity: 0;
  animation: valueAppear 0.8s forwards ease-out 4s;
}

@keyframes gaugeAppear {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}
@keyframes tickAppear {
  0% { opacity: 0; height: 0; }
  100% { opacity: 1; height: 10px; }
}
@keyframes needleAppear {
  0% { opacity: 0; transform: rotate(-90deg); }
  100% { opacity: 1; transform: rotate(-70deg); }
}
@keyframes needleMove {
  0%   { transform: rotate(-70deg); }
  40%  { transform: rotate(60deg); }
  60%  { transform: rotate(45deg); }
  75%  { transform: rotate(55deg); }
  90%  { transform: rotate(50deg); }
  100% { transform: rotate(53deg); }
}
@keyframes valueAppear {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/********************************************************
  9) BAR CHART
********************************************************/
.barChartContainer {
  position: relative;
  width: 100%;
  height: 100%;
}
.barGroup {
  position: absolute;
  bottom: 12%;
  left: 12%;
  width: 76%;
  height: 76%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.barWrapper {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}
.bar {
  width: 60%;
  background: linear-gradient(to top, rgba(149,82,211,0.7), rgba(188,115,237,0.7));
  border-radius: 3px 3px 0 0;
  transform: scaleY(0);
  transform-origin: bottom;
  animation: barGrow 1.2s forwards cubic-bezier(.17,.67,.83,.67);
}
.barLabel {
  position: absolute;
  bottom: -15px;
  font-size: 8px;
  color: #666;
  opacity: 0;
  animation: labelFadeIn 0.5s forwards ease-out;
}
.barValue {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 8px;
  color: #fff;
  font-weight: 600;
  top: 0;
  transform: translateY(-100%);
  opacity: 0;
  animation: labelFadeIn 0.5s forwards ease-out;
}

@keyframes barGrow {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}
@keyframes labelFadeIn {
  0% { opacity: 0; transform: translateY(5px); }
  100% { opacity: 1; transform: translateY(0); }
}

/********************************************************
  10) BUBBLE
********************************************************/
.bubbleContainer {
  position: relative;
  width: 100%; 
  height: 100%;
}
.bubble {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  background: radial-gradient(circle at 30% 30%, rgba(188,115,237,0.9), rgba(149,82,211,0.7));
  box-shadow: 0 0 15px rgba(149,82,211,0.3);
  animation: bubbleGrow 1.5s forwards cubic-bezier(0.17, 0.67, 0.83, 0.67);
}
.bubble:nth-child(1) {
  width: 25%;
  height: 25%;
  left: 20%;
  top: 30%;
  animation-delay: 0.5s;
}
.bubble:nth-child(2) {
  width: 35%;
  height: 35%;
  right: 20%;
  top: 50%;
  animation-delay: 1.2s;
}
.bubble:nth-child(3) {
  width: 20%;
  height: 20%;
  left: 50%;
  top: 25%;
  animation-delay: 1.7s;
}

.bubbleLabel {
  position: absolute;
  font-size: 9px;
  font-weight: 600;
  color: #252525;
  text-align: center;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: bubbleLabelAppear 0.8s forwards ease-out;
}
.bubbleLabel:nth-child(4) {
  left: 20%;
  top: 30%;
  animation-delay: 1.0s;
}
.bubbleLabel:nth-child(5) {
  right: 20%;
  top: 50%;
  animation-delay: 1.7s;
}
.bubbleLabel:nth-child(6) {
  left: 50%;
  top: 25%;
  animation-delay: 2.2s;
}

.bubbleValue {
  position: absolute;
  font-size: 7px;
  color: #252525;
  text-align: center;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: bubbleLabelAppear 0.8s forwards ease-out;
}
.bubbleValue:nth-child(7)  {
  left: 20%;
  top: calc(30% + 10px);
  animation-delay: 1.1s;
}
.bubbleValue:nth-child(8)  {
  right: 20%;
  top: calc(50% + 15px);
  animation-delay: 1.8s;
}
.bubbleValue:nth-child(9)  {
  left: 50%;
  top: calc(25% + 8px);
  animation-delay: 2.3s;
}

@keyframes bubbleGrow {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes bubbleLabelAppear {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

/********************************************************
  11) LINE
********************************************************/
.lineChartContainer {
  position: relative;
  width: 100%; 
  height: 100%;
}
.lineChart {
  position: absolute;
  bottom: 12%;
  left: 6%;
  width: 88%;
  height: 76%;
}
.lineBase {
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  background-color: rgba(0,0,0,0.1);
}
.linePath {
  position: absolute;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #9552D3;
  stroke-width: 2px;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: lineDraw 2s forwards ease-out 1s;
}
.linePath::before {
  content: '';
  position: absolute;
  border-bottom: 2px solid #9552D3;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0% 60%,
    10% 75%,
    20% 50%,
    30% 65%,
    40% 40%,
    50% 20%,
    60% 35%,
    70% 10%,
    80% 30%,
    90% 15%,
    100% 25%
  );
  opacity: 0;
  animation: lineAppear 0.1s forwards ease-out 1s;
}

.linePoint {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: white;
  border: 2px solid #9552D3;
  border-radius: 50%;
  transform: translate(-50%, 50%) scale(0);
  animation: linePointAppear 0.5s forwards ease-out;
}
.linePoint:nth-child(3)  { bottom: 60%; left: 0%;   animation-delay: 1.1s; }
.linePoint:nth-child(4)  { bottom: 75%; left: 10%;  animation-delay: 1.2s; }
.linePoint:nth-child(5)  { bottom: 50%; left: 20%;  animation-delay: 1.3s; }
.linePoint:nth-child(6)  { bottom: 65%; left: 30%;  animation-delay: 1.4s; }
.linePoint:nth-child(7)  { bottom: 40%; left: 40%;  animation-delay: 1.5s; }
.linePoint:nth-child(8)  { bottom: 20%; left: 50%;  animation-delay: 1.6s; }
.linePoint:nth-child(9)  { bottom: 35%; left: 60%;  animation-delay: 1.7s; }
.linePoint:nth-child(10) { bottom: 10%; left: 70%;  animation-delay: 1.8s; }
.linePoint:nth-child(11) { bottom: 30%; left: 80%;  animation-delay: 1.9s; }
.linePoint:nth-child(12) { bottom: 15%; left: 90%;  animation-delay: 2.0s; }
.linePoint:nth-child(13) { bottom: 25%; left: 100%; animation-delay: 2.1s; }

.lineFill {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0% 60%, 10% 75%, 20% 50%, 30% 65%, 40% 40%, 50% 20%, 
    60% 35%, 70% 10%, 80% 30%, 90% 15%, 100% 25%,
    100% 0%, 0% 0%
  );
  background: linear-gradient(to bottom, rgba(149,82,211,0.4) 0%, rgba(149,82,211,0.05) 100%);
  opacity: 0;
  animation: lineFillAppear 1.5s forwards ease-out 2.3s;
}

@keyframes lineDraw {
  0% { stroke-dashoffset: 500; }
  100% { stroke-dashoffset: 0; }
}
@keyframes lineAppear {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes linePointAppear {
  0% { transform: translate(-50%, 50%) scale(0); }
  70% { transform: translate(-50%, 50%) scale(1.5); }
  100% { transform: translate(-50%, 50%) scale(1); }
}
@keyframes lineFillAppear {
  0% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
  100% { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
}

/********************************************************
  12) NETWORK
********************************************************/
.networkContainer {
  position: relative;
  width: 100%; 
  height: 100%;
}
.networkNode {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #9552D3, #7941a0);
  transform: translate(-50%, -50%) scale(0);
  animation: nodeAppear 0.7s forwards cubic-bezier(.17,.67,.83,.67);
  z-index: 3;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.networkNode:nth-child(1) { left: 25%; top: 30%; animation-delay: 0.5s; }
.networkNode:nth-child(2) { left: 70%; top: 25%; animation-delay: 0.8s; }
.networkNode:nth-child(3) { left: 20%; top: 65%; animation-delay: 1.1s; }
.networkNode:nth-child(4) { left: 65%; top: 70%; animation-delay: 1.4s; }
.networkNode:nth-child(5) { left: 45%; top: 45%; animation-delay: 1.7s; }

.networkLink {
  position: absolute;
  height: 2px;
  background-color: rgba(149,82,211,0.4);
  transform-origin: left center;
  transform: scaleX(0);
  z-index: 2;
}
.networkLink:nth-child(6)  { animation: linkGrow 1s forwards ease-out 2.0s; }
.networkLink:nth-child(7)  { animation: linkGrow 1s forwards ease-out 2.2s; }
.networkLink:nth-child(8)  { animation: linkGrow 1s forwards ease-out 2.4s; }
.networkLink:nth-child(9)  { animation: linkGrow 1s forwards ease-out 2.6s; }
.networkLink:nth-child(10) { animation: linkGrow 1s forwards ease-out 2.8s; }
.networkLink:nth-child(11) { animation: linkGrow 1s forwards ease-out 3.0s; }
.networkLink:nth-child(12) { animation: linkGrow 1s forwards ease-out 3.2s; }
.networkLink:nth-child(13) { animation: linkGrow 1s forwards ease-out 3.4s; }

.nodeLabel {
  position: absolute;
  font-size: 9px;
  color: #333;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: labelAppear 0.5s forwards ease-out;
  z-index: 4;
  background-color: rgba(255,255,255,0.7);
  padding: 2px 4px;
  border-radius: 3px;
}
.nodeLabel:nth-child(14) { left: 25%; top: calc(30% - 25px); animation-delay: 0.7s; }
.nodeLabel:nth-child(15) { left: 70%; top: calc(25% - 25px); animation-delay: 1.0s; }
.nodeLabel:nth-child(16) { left: 20%; top: calc(65% - 25px); animation-delay: 1.3s; }
.nodeLabel:nth-child(17) { left: 65%; top: calc(70% - 25px); animation-delay: 1.6s; }
.nodeLabel:nth-child(18) { left: 45%; top: calc(45% - 25px); animation-delay: 1.9s; }

@keyframes nodeAppear {
  0% { transform: translate(-50%, -50%) scale(0); }
  60% { transform: translate(-50%, -50%) scale(1.2); }
  100% { transform: translate(-50%, -50%) scale(1); }
}
@keyframes linkGrow {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

/********************************************************
  ROTATING MESSAGES
********************************************************/
.message {
  font-size: 16px;
  color: #252525;
  text-align: center;
  transition: opacity 0.5s, transform 0.5s;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-top: 20px;
  padding: 0 20px;
}
.fadeIn {
  opacity: 1;
  transform: translateY(0);
}
.fadeOut {
  opacity: 0;
  transform: translateY(10px);
}
.message::after {
  content: '';
  display: inline-block;
  width: 0;
  animation: loadingDots 1.5s infinite;
}
@keyframes loadingDots {
  0% { content: ''; }
  25% { content: '.'; }
  50% { content: '..'; }
  75% { content: '...'; }
}

/********************************************************
  ANALYSIS LOG AREA
********************************************************/
.analysisLog {
  max-height: 150px;
  overflow-y: auto;
  margin-top: 20px;
  padding: 10px;
  border: none;
  background: transparent;
  font-size: 12px;
  line-height: 1.4;
  color: #666;
  border-radius: 4px;
}
.logLine { margin-bottom: 2px; }

/********************************************************
  RESPONSIVE ADJUSTMENTS
********************************************************/
@media (max-width: 1200px) {
  .visualization {
    grid-template-rows: repeat(4, 170px);
  }
  .windowTitle { font-size: 10px; }
}

@media (max-width: 992px) {
  .visualization {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 160px);
  }
  .module:nth-of-type(3) { grid-column: 1; grid-row: 2; }
  .module:nth-of-type(4) { grid-column: 2; grid-row: 2; }
  .module:nth-of-type(5) { grid-column: 1; grid-row: 3; }
  .module:nth-of-type(6) { grid-column: 2; grid-row: 3; }
  .module:nth-of-type(7) { grid-column: 1; grid-row: 4; }
  .module:nth-of-type(8) { grid-column: 2; grid-row: 4; }
  .module:nth-of-type(9) { grid-column: 1; grid-row: 5; }
  .module:nth-of-type(10) { grid-column: 2; grid-row: 5; }
  .module:nth-of-type(11) { grid-column: 1; grid-row: 6; }
  .module:nth-of-type(12) { grid-column: 2; grid-row: 6; }
  .windowTitle { font-size: 9px; }
}

@media (max-width: 768px) {
  .header {
    font-size: 18px;
    padding: 12px 15px;
  }
  .content { padding: 15px 10px; }
  .visualization {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 140px);
    gap: 12px;
  }
  .module:nth-of-type(n) { grid-column: 1; }
  .module:nth-of-type(1)  { grid-row: 1; }
  .module:nth-of-type(2)  { grid-row: 2; }
  .module:nth-of-type(3)  { grid-row: 3; }
  .module:nth-of-type(4)  { grid-row: 4; }
  .module:nth-of-type(5)  { grid-row: 5; }
  .module:nth-of-type(6)  { grid-row: 6; }
  .module:nth-of-type(7)  { grid-row: 7; }
  .module:nth-of-type(8)  { grid-row: 8; }
  .module:nth-of-type(9)  { grid-row: 9; }
  .module:nth-of-type(10) { grid-row: 10; }
  .module:nth-of-type(11) { grid-row: 11; }
  .module:nth-of-type(12) { grid-row: 12; }
  .message { font-size: 14px; }
}

@media (max-width: 480px) {
  .header {
    font-size: 16px;
    padding: 10px;
  }
  .message {
    font-size: 12px;
    margin-top: 15px;
  }
  .visualization {
    grid-template-rows: repeat(12, 130px);
    gap: 10px;
  }
  .windowTitle { font-size: 8px; }
  .macWindowBar { height: 22px; }
  .trafficLight {
    width: 10px;
    height: 10px;
  }
}
