LESSC=lessc
LESSCOPTS=
LESSFILES=style.less $(subst style.less,,$(wildcard *.less))

style.css: style.less $(LESSFILES)
	$(LESSC) $(LESSCOPTS) $< $@

# .PHONY: style.css
